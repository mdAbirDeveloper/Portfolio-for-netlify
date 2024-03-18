import React, { useContext } from "react";
import AllBlog from "./AllBlog";
import { useQuery } from "react-query";
import { AuthContext } from "../../Authenticatio/Authenticatio";

const Blog = () => {
  const {user} = useContext(AuthContext);
  const isAdmin = user?.email === 'mdsahjalal9778@gmail.com'
  const {
    data: blogData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["blog"],
    queryFn: async () => {
      const res = await fetch("https://my-portfolio-server-eight-beta.vercel.app/blog");
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
      {blogData.length === 0 ? (
        <p>No blogs available</p>
      ) : (
        blogData.map((blogs) => (
          <AllBlog blogs={blogs} isAdmin={isAdmin} key={blogs._id}></AllBlog>
        ))
      )}
    </div>
  );
};

export default Blog;
