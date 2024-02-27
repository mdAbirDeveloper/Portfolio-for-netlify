import React from "react";
import { FaArrowRight } from "react-icons/fa";
<meta name="google-site-verification" content="s2gRKW1qyp97dct5p8I8FzwIW3EqNlGhAK-RGkUqMEw" />
const Price = () => {
  // const navigate = useNavigate();
  // const hanldeOrder = () => {
  //   navigate("/contect");
  // };

  return (
    <div>
      <h2 className="uppercase font-serif text-center text-5xl divider text-green-500 font-bold mt-32">
        packages
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  rounded-xl my-14">
        <div className="bg-slate-800 hover:shadow-2xl text-white py-14 my-5 mx-5 rounded-2xl">
          <h4 className="lg:text-xl md:text-md font-serif text-yellow-300 font-bold mb-3">Basic plan/<small className="text-sm font-thin">$10-45</small></h4>
          <p className="font-serif my-3 bg-slate-900 py-3 rounded-xl">Attractive Front-end</p>
          <p className="font-serif my-3 bg-slate-900 py-3 rounded-xl">Figma to React.JS</p>
          <p className="font-serif my-3 bg-slate-900 py-3 rounded-xl">Figma to Next.JS</p>
          <p className="font-serif my-3 bg-slate-900 py-3 rounded-xl font-bold">On page SEO</p>
          <p className="font-serif my-3 bg-slate-900 py-3 rounded-xl">User Authentication</p>
          <a href="https://www.fiverr.com/shah_jalal_web/be-react-developer-or-figma-to-react-or-next-js-with-tailwind-css-react-js">
            <button type="" className="btn btn-secondary">Order with fiverr<FaArrowRight></FaArrowRight></button>
          </a>
        </div>
        <div className="bg-slate-800 text-white py-14 my-5 mx-5 rounded-2xl">
        <h4 className="lg:text-xl md:text-md font-serif text-blue-500 font-bold mb-3">Standerd/<small className="text-sm font-thin">$30-75</small></h4>
          <p className="font-serif bg-slate-900 py-3 rounded-2xl my-3">Marn-stack development</p>
          <p className="font-serif bg-slate-900 py-3 rounded-2xl font-bold text-yellow-300 my-3">Basic +</p>
          <p className="font-serif bg-slate-900 py-3 rounded-2xl my-3">Firebase Free hosting</p>
          <p className="font-serif bg-slate-900 py-3 rounded-2xl my-3">JWT verification</p>
          <p className="font-serif bg-slate-900 py-3 rounded-2xl my-3">Blog website</p>
          <a href="https://www.fiverr.com/shah_jalal_web/do-website-development-as-a-front-end-web-developer-with-react-js-or-next-js-fa10">
            <button type="" className="btn btn-secondary">Order with fiverr<FaArrowRight></FaArrowRight></button>
          </a>
        </div>
        <div className="bg-slate-800 text-white py-14 my-5 mx-5 rounded-2xl">
        <h4 className="lg:text-xl md:text-md font-serif text-green-500 font-bold mb-3">Premium/<small className="text-sm font-thin">$80-150</small></h4>
          <p className="my-3 bg-slate-900 py-3 rounded-2xl font-serif">Full-Stack development</p>
          <p className="my-3 bg-slate-900 py-3 rounded-2xl font-serif text-blue-500 font-bold">Standerd +</p>
          <p className="my-3 bg-slate-900 py-3 rounded-2xl font-serif">E-commerce website</p>
          <p className="my-3 bg-slate-900 py-3 rounded-2xl font-serif">Admin panel</p>
          <p className="my-3 bg-slate-900 py-3 rounded-2xl font-serif">hosting setup</p>
          <a href="https://www.fiverr.com/shah_jalal_web/do-website-development-as-a-full-stack-web-developer">
            <button type="" className="btn btn-secondary">Order with fiverr <FaArrowRight></FaArrowRight></button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Price;
