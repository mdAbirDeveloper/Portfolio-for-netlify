import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Authenticatio/Authenticatio";
import manuLogo from "./default.png";

const Navber = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const isAdmin = user?.email === "jalal.profession@gmail.com";

  const menuItem = (
    <>
      <Link
        className="font-bold mr-8 sm:text-black text-left  rounded my-3 lg:text-white"
        to={"/"}
      >
        Home
      </Link>
      <Link
        className="font-bold mr-8 sm:text-black text-left  rounded my-3 lg:text-white"
        to={"/blog"}
      >
        Blog
      </Link>

      <Link
        className="font-bold mr-8 sm:text-black text-left  rounded my-3 lg:text-white"
        to={"/feature"}
      >
        FEATURES
      </Link>
      <Link
        className="font-bold mr-8 sm:text-black text-left  rounded my-3 lg:text-white"
        to={"/clientcomment"}
      >
        User Comments
      </Link>
      <Link
        className="font-bold mr-8 sm:text-black text-left  rounded my-3 lg:text-white"
        to={"/Contect"}
      >
        CONTACTS
      </Link>
      {user?.uid ? (
        <>
          {isAdmin && (
            <>
              <Link
                className="font-bold mr-8 sm:text-black text-left  rounded my-3 lg:text-white"
                to={"/writeblog"}
              >
                Write a Blog
              </Link>
              <Link
                className="font-bold mr-8 sm:text-black text-left  rounded my-3 lg:text-white"
                to={"/uploadRecentWork"}
              >
                UploadRecentWork
              </Link>
            </>
          )}

          <Link
            onClick={signOutUser}
            className="font-bold mr-8 text-green-600 text-left  rounded my-3"
          >
            SignOut
          </Link>
        </>
      ) : (
        <>
          <Link
            className="font-bold mr-8 sm:text-black lg:text-white text-left  rounded my-3"
            to={"/login"}
          >
            Sign In
          </Link>
          <Link
            className="font-bold mr-8 sm:text-black lg:text-white text-left  rounded my-3"
            to={"/signup"}
          >
            Sign Up
          </Link>
        </>
      )}
    </>
  );
  return (
    <div className="">
      <div className="navbar bg-slate-700 p-0 rounded-lg my-6">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3  bg-base-100 shadow rounded-box w-50"
            >
              {menuItem}
            </ul>
          </div>
          <img className="w-36 rounded-lg lg:ml-14 lg:block hidden" src={manuLogo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItem}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
