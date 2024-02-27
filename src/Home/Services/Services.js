import React from "react";
import { FaCentos, FaNodeJs, FaPenNib, FaUser } from "react-icons/fa";

const Services = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-14 bg-slate-900 rounded-lg p-10">
      <div className="text-white my-auto">
        <h1 className="text-5xl mt-5 font-bold">
          CREATIVE <br /> WEB DESIGN SERVICES
        </h1>
        <p className=" font-bold mt-6">
          In addition to all the branding and marketing features and benefits,
          our clients get to enjoy the advantages of a time-tested and refined
          workflow that is custom-tailored to each project!
        </p>
        <button type="" className="btn bg-blue-600 border-none my-5">
          <a href="https://www.upwork.com/freelancers/~01da9284068e6bfcca">My PORTFOLIO on Upwork</a>
        </button>
      </div>
      <div className="text-white grid lg:grid-cols-2 sm:grid-cols-1 gap-4 p-6">
        <div className="mb-6">
          <FaUser className="mx-auto text-3xl text-green-600"></FaUser>
          <h4 className="text-xl">POWERFUL ADMIN PANEL</h4>
          <p> Use our powerful admin system to manage your tasks.</p>
        </div>
        <div className="mb-6">
          <FaNodeJs className="mx-auto text-3xl text-green-600"></FaNodeJs>
          <h4 className="text-xl">DEVELOPMENT</h4>
          <p>Skilled developers can help you build a professional website.</p>
        </div>
        <div className="mb-6">
          <FaPenNib className="mx-auto text-3xl text-green-600"></FaPenNib>
          <h4 className="text-xl">TOUCH & RETINA OPTIMIZATION</h4>
          <p>
            {" "}
            See how the details truly stand out in comparison to other designs.
          </p>
        </div>
        <div className="mb-6">
          <FaCentos className="mx-auto text-3xl text-green-600"></FaCentos>
          <h4 className="text-xl">PIXEL PERFECT DESIGN</h4>
          <p>
            {" "}
            We take pride in creative design that is never lost in translation..
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
