import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Comments from "./Comments";
import abirImg from "../../profile/profile-img.png";
import { AuthContext } from "../../Authenticatio/Authenticatio";
import { Link } from "react-router-dom";

const ClientComment = () => {
  const { handleSubmit, register } = useForm();
  const { user } = useContext(AuthContext);
  const onSubmit = (data) => {
    const image = data.image[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=d1fbaa0b9f043f285b08e6d997b387ef`;

    //send image on imgbb
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgdata) => {
        const comment = {
          name: data.name,
          email: data.email,
          comment: data.comment,
          image: imgdata.data.url,
        };
        console.log(imgdata);

        //send data on mongodb
        fetch("https://my-portfolio-server-eight-beta.vercel.app/protfolio", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(comment),
        })
          .then((res) => res.json())
          .then((reuslt) => {
            console.log(reuslt);
          });
      });
  };

  //get comment from db
  const {
    data: commetData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["protfolio"],
    queryFn: async () => {
      const res = await fetch(
        "https://my-portfolio-server-eight-beta.vercel.app/protfolio"
      );
      const data = await res.json();
      return data;
    },
  });
  refetch();

  if (isLoading) {
    return <progress className="progress progress-success w-56"></progress>;
  }

  return (
    <div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 w-full">
        <div className="grid gap-10 ">
          {commetData.map((comments) => (
            <Comments comments={comments} key={comments._id}></Comments>
          ))}
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-center text-green-500 font-bold text-4xl mt-5">
              Enter your Comment
            </h2>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8">
              <input
                placeholder="name"
                className="input input-accent"
                {...register("name")}
              />
              <input
                placeholder="email"
                className="input input-accent"
                {...register("email")}
              />
              <input
                placeholder="enter your comment"
                className="input input-accent"
                {...register("comment")}
              />
              <div>
                <input
                  {...register("image", { required: true })}
                  type="file"
                  className=" input input-bordered w-full "
                />
              </div>
            </div>
            {user?.uid ? (
              <>
                <input className="btn btn-primary mt-3" type="submit" />
              </>
            ) : (
              <>
                <button className="btn btn-primary mt-3">
                  <Link to={"/login"}>
                    Please login first to through a comment
                  </Link>
                </button>
              </>
            )}
          </form>

          {/* total Lick section  */}
          <div className="mx-auto">
            <div className="shadow my-10 grid md:grid-cols-3 lg:grid-cols-3">
              <div className="">
                <div className="stat-figure text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Total Likes</div>
                <div className="stat-value text-primary">25.6K</div>
                <div className="stat-desc">21% more than last month</div>
              </div>

              <div className="">
                <div className="stat-figure text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Page Views</div>
                <div className="stat-value text-secondary">2.6M</div>
                <div className="stat-desc">21% more than last month</div>
              </div>

              <div className="">
                <div className="stat-figure text-secondary">
                  <div className="avatar online">
                    <div className="w-16 rounded-full">
                      <img src={abirImg} alt="" />
                    </div>
                  </div>
                </div>
                <div className="stat-value">86%</div>
                <div className="stat-title">Tasks done</div>
                <div className="stat-desc text-secondary">
                  31 tasks remaining
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientComment;
