import { useState } from "react";

const AllBlog = ({ blogs, isAdmin, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteBlog = async (id) => {
    try {
      setIsDeleting(true);

      // Send DELETE request to the server
      const response = await fetch(`https://my-portfolio-server-eight-beta.vercel.app/blog/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });

      if (response.ok) {
        // console.log("Blog deleted successfully");
        // Optionally, you can trigger a callback function (onDelete) to update the UI
        onDelete && onDelete(id);
      } else {
        console.error("Failed to delete blog");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="my-7 rounded-2xl shadow-2xl">
      <h2>uploated date : {new Date(blogs.timestamp).toLocaleString()}</h2>
      <h1 className=" font-serif text-yellow-200 md:text-xl lg:text-3xl mt-3 bg-purple-700 rounded-2xl py-2">
        {blogs?.title}
      </h1>
      <div className="w-4/5 mx-auto">
        <div className="lg:w-2/3 mx-auto mt-4">
          <img className="rounded-xl" src={blogs?.image} alt="" />
        </div>
        <p className="font-serif">{blogs?.free_text}</p>

        <p className="lg:text-2xl md:text-xl font-serif text-purple-600 mt-4">
          {blogs?.heading_1}
        </p>
        <p className="font-sans hover:font-serif">{blogs?.text_1}</p>

        <p className="lg:text-2xl md:text-xl font-serif text-blue-800 mt-4">
          {blogs?.heading_2}
        </p>
        <p className="font-sans hover:font-serif">{blogs?.text_2}</p>

        <p className="lg:text-2xl md:text-xl font-serif text-purple-600  mt-4">
          {blogs?.heading_3}
        </p>
        <p className="font-sans hover:font-serif">{blogs?.text_3}</p>

        <p className="lg:text-2xl md:text-xl font-serif text-blue-800 mt-4">
          {blogs?.heading_4}
        </p>
        <p className="font-sans hover:font-serif">{blogs?.text_4}</p>

        <p className="font-sans hover:font-serif text-green-400">
          {blogs?.summary}
        </p>
        {isAdmin && (
          <button
            className="bg-red-500 btn"
            onClick={() => deleteBlog(blogs?._id)}
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
        )}
      </div>
    </div>
  );
};

export default AllBlog;
