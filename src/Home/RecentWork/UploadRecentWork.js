import React, { useState } from "react";
import { useForm } from "react-hook-form";

const UploadRecentWork = () => {
  const { handleSubmit, register } = useForm();
  const [isError , setIsError] = useState("")
  const [isPosting, setIsPosting] = useState(false);
  const onSubmit = async (data) => {
    try{
      setIsPosting(true)
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    //upload image on imgBB
    const imgBBUrl = `https://api.imgbb.com/1/upload?key=d1fbaa0b9f043f285b08e6d997b387ef`;
      const imgBBResponse = await fetch(imgBBUrl, {
        method: "POST",
        body: formData,
      });
  
      if (!imgBBResponse.ok) {
        throw new Error(`Failed to upload image to imgBB. Server responded with ${imgBBResponse.status}`);
      }
  
      const imageData = await imgBBResponse.json();
      const timestamp = new Date();

      //ready the work detail to push on DB
      const workDetail = {
        title: data.title,
        description: data.description,
        image: imageData.data.image.url,
        thumb: imageData.data.thumb.url,
        timestamp: timestamp,
      };

      //send data on mongoDB
      const mongoDBResponse = await fetch('https://my-portfolio-server-eight-beta.vercel.app/work-history', {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(workDetail)
      });

      if(!mongoDBResponse.ok){
        throw new Error(`Faild to Add work history, with ${mongoDBResponse.status}`)
      }
    console.log(workDetail);
    const result = await mongoDBResponse.json();
    console.log(result, "submitted successfully");
    // navigate('/blog');
  } catch (error) {
    console.error(error, "data not submitted");
    setIsError("Blog not submitted");
  } finally{
    setIsPosting(false)
  }
};
  return (
    <div className="">
      <h1>this is upload image page</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-3"
      >
        <input
          {...register("title")}
          className="input input-bordered border border-green-400 w-2/4 mx-auto"
          placeholder="Write your project title"
        />
        <textarea
          {...register("description")}
          cols="30"
          rows="10"
          type="text"
          className="input input-bordered border border-green-400 w-2/4 mx-auto"
          placeholder="Write your project description"
        />
        <label>choge an image of your project</label>
        <input
          {...register("image")}
          type="file"
          className="input input-bordered border border-green-400 w-2/4 mx-auto"
          placeholder="Write your project description"
        />
        {
                isError &&
              <><p className="text-red-500">{isError}</p></>
              }
        <button
                className="btn btn-success w-1/2 mx-auto"
                type="submit"
                value={"Post The Blog"}
                disabled={isPosting}
              >{isPosting ? "workHistory is Posting": "post"}</button>
      </form>
    </div>
  );
};

export default UploadRecentWork;
