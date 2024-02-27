import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const WriteBlog = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  const [isError , setIsError] = useState("")
  const [isPosting, setIsPosting] = useState(false);


  const onSubmit = async (data) => {
    try {
      // Upload image to imgBB
      setIsPosting(true)
      const image = data.image[0];
      const formData = new FormData();
      formData.append("image", image);
      
      //send image on imgbb
      const imgBBUrl = `https://api.imgbb.com/1/upload?key=d1fbaa0b9f043f285b08e6d997b387ef`;
      const imgBBResponse = await fetch(imgBBUrl, {
        method: "POST",
        body: formData,
      });
  
      if (!imgBBResponse.ok) {
        throw new Error(`Failed to upload image to imgBB. Server responded with ${imgBBResponse.status}`);
      }
  
      const imageData = await imgBBResponse.json();
  
      // Prepare blog data
      const timestamp = new Date();
      const blog = {
        title: data.blog_title,
        free_text: data.free_text,
        heading_1: data.heading_1,
        heading_2: data.heading_2,
        heading_3: data.heading_3,
        heading_4: data.heading_4,
        text_1: data.text_1,
        text_2: data.text_2,
        text_3: data.text_3,
        text_4: data.text_4,
        summary: data.summary,
        image: imageData.data.url,
        timestamp: timestamp,
      };
  
      // Send data to MongoDB
      const mongoDBResponse = await fetch(`https://my-portfolio-server-eight-beta.vercel.app/blog`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(blog),
      });
  
      if (!mongoDBResponse.ok) {
        throw new Error(`Failed to submit blog. Server responded with ${mongoDBResponse.status}`);
      }
  
      const result = await mongoDBResponse.json();
      console.log(result, "submitted successfully");
      navigate('/blog');
    } catch (error) {
      console.error(error, "data not submitted");
      setIsError("Blog not submitted");
    } finally{
      setIsPosting(false)
    }
  };
  


  return (
    <div>
      <div className=" min-h-screen bg-base-200">
        <div className=" flex-col lg:flex-row-reverse">
          <div className="card shrink-0 shadow-2xl bg-base-100">
            <form
              className="card-body w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Title</span>
                </label>
                <input
                required
                  type="text"
                  placeholder="Write your Blog Title"
                  className="input input-bordered"
                  {...register("blog_title")}
                />
              </div>

              <div>
                <textarea
                required
                  cols="30"
                  rows="10"
                  type="text"
                  placeholder="Write your free text here"
                  className="input input-bordered w-full"
                  {...register("free_text")}
                ></textarea>
              </div>

              {/* heading one */}
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Write your heading_1"
                  className="input input-bordered"
                  {...register("heading_1")}
                />
              </div>

              {/* text one */}
              <div className="form-control">
                <textarea
                  cols="30"
                  rows="10"
                  type="text"
                  placeholder="Write your text_1"
                  className="input input-bordered"
                  {...register("text_1")}
                ></textarea>
              </div>

              {/* heading two */}
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Write your heading_2"
                  className="input input-bordered"
                  {...register("heading_2")}
                />
              </div>

              {/* text two */}
              <div className="form-control">
                <textarea
                  cols="30"
                  rows="10"
                  type="text"
                  placeholder="Write your text_2"
                  className="input input-bordered"
                  {...register("text_2")}
                ></textarea>
              </div>

              {/* heading three */}
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Write your heading_3"
                  className="input input-bordered"
                  {...register("heading_3")}
                />
              </div>

              {/* text three */}
              <div className="form-control">
                <textarea
                  cols="30"
                  rows="10"
                  type="text"
                  placeholder="Write your text_3"
                  className="input input-bordered"
                  {...register("text_3")}
                ></textarea>
              </div>

              {/* heading four */}
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Write your heading_4"
                  className="input input-bordered"
                  {...register("heading_4")}
                />
              </div>

              {/* text one */}
              <div className="form-control">
                <textarea
                  cols="30"
                  rows="10"
                  type="text"
                  placeholder="Write your text_4"
                  className="input input-bordered"
                  {...register("text_4")}
                ></textarea>
              </div>

              {/* summary of this blog */}
              <div className="form-control">
                <textarea
                  cols="30"
                  rows="10"
                  type="text"
                  placeholder="Write your blog summary"
                  className="input input-bordered"
                  {...register("summary")}
                ></textarea>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Blog Image</span>
                </label>
                <input
                  type="file"
                  className="input input-bordered"
                  {...register("image", { required: true })}
                />
              </div>
              {
                isError &&
              <><p className="text-red-500">{isError}</p></>
              }
              
              <button
                className="btn btn-primary"
                type="submit"
                value={"Post The Blog"}
                disabled={isPosting}
              >{isPosting ? "Blog is Posting": "blog posted successfully"}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteBlog;
