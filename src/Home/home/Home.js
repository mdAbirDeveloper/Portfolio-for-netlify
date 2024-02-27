import React from "react";
import Profile from "../../profile/Profile";
import Banner from "../Banner/Banner";
import Price from "../Price/Price";
import RecentWork from "../RecentWork/RecentWork";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <div>
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* <!-- Page content here --> */}
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open profile
            </label>
            <div className="">
              <Banner></Banner>
              <Services></Services>
              <Price></Price>
              <RecentWork></RecentWork>
            </div>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-64 bg-base-100 text-base-content">
              {/* <!-- Sidebar content here --> */}
              <Profile></Profile>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
