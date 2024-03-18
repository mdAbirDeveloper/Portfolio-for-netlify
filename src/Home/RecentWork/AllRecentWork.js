import React from "react";
import { Link } from "react-router-dom";

const AllRecentWork = ({ data }) => {
  return (
    <div className="shadow-xl rounded-xl text-green-600 hover:bg-slate-800 hover:text-white mb-4">
      <a href="https://www.upwork.com/freelancers/~01da9284068e6bfcca">
        <div>
          <img src={data.image} alt="" />
          <h1 className="text-lg font-bold uppercase">{data.title}</h1>
          {/* <p>{data.description}</p> */}
        </div>
      </a>
    </div>
  );
};

export default AllRecentWork;
