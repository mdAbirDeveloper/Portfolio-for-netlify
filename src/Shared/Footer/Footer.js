/* eslint-disable jsx-a11y/img-redundant-alt */

import React from "react";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-neutral-content mt-8 rounded-lg">
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover">UI/UX Design</Link>
          <Link className="link link-hover">Full-Stack Web Development</Link>
          <Link className="link link-hover">Vedio Editing</Link>
          <Link className="link link-hover">Graphics Design</Link>
          <Link className="link link-hover">SEO</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <div className="grid grid-cols-5 gap-3">
            <a href="https://www.facebook.com/Shah.jalal.web">
              {" "}
              <FaFacebook className="text-blue-500 text-2xl"></FaFacebook>
            </a>
            <FaWhatsapp className="text-green-500 text-2xl"></FaWhatsapp>
            <a href="https://www.linkedin.com/in/shah-jalal-programmer/">
              <FaLinkedin className="text-blue-500 text-2xl"></FaLinkedin>
            </a>
            <a href="https://www.fiverr.com/shah_jalal_web">
              <img
                alt=""
                className="w-7 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Cpx0-4GyPNTT06JUFrqz9tGBaPOZPfc7gw&usqp=CAU"
              ></img>
            </a>
            <a href="https://www.upwork.com/freelancers/~01da9284068e6bfcca">
              <img
                className="w-7 rounded-full"
                src="https://i.ibb.co/hW05YL2/image.png"
                alt="image"
                border="0"
              ></img>
            </a>
          </div>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
