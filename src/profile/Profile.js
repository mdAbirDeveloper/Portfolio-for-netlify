import React from "react";
import profileImg from "./profile-img.png";

const Profile = () => {
  return (
    <div className="bg-slate-700">
      <div className="avatar my-6  online avatar-active">
        <div className="w-24 rounded-full">
          <img src={profileImg} alt="" />
        </div>
      </div>
      <div className="text-white mb-6">
        <p className="text-xl font-bold text-white">Shah Jalal</p>
        <p>Full Stack Web Developer</p>
        <p>Email: jalal.professtion@gamil.com</p>
        <p>WhatsApp: +8801832822560</p>
      </div>
      <div className="bg-slate-900 text-white grid grid-cols-2 py-4">
        <div className="font-bold">
          <p>Residence:</p>
          <p>City:</p>
          <p>Age:</p>
        </div>
        <div>
          <p>Bangladesh</p>
          <p>Cumilla</p>
          <p>23</p>
        </div>
      </div>
      <div className="p-3 text-white ">
        <h3 className=" font-bold">Language knowledge</h3>
        <div className="grid grid-cols-2 gap-4 mt-3">
          <div
            className="radial-progress bg-white text-blue-600"
            style={{ "--value": 90 }}
          >
            English
          </div>
          <div
            className="radial-progress bg-white text-blue-500"
            style={{ "--value": 90 }}
          >
            Hindi
          </div>
          <div
            className="radial-progress  text-yellow-300"
            style={{ "--value": 60 }}
          >
            urdu
          </div>
          <div
            className="radial-progress bg-white text-green-500"
            style={{ "--value": 100 }}
          >
            Bangla
          </div>
        </div>
      </div>

      <div className="p-2 text-white bg-slate-900">
        <h3 className=" font-bold">programing knowledge</h3>
        <p>HTML</p>
        <progress
          className="progress bg-white progress-success w-56"
          value="95"
          max="100"
        ></progress>
        <p>CSS</p>
        <progress
          className="progress bg-white progress-success w-56"
          value="90"
          max="100"
        ></progress>
        <p>BOOTSTRAP</p>
        <progress
          className="progress bg-white progress-success w-56"
          value="85"
          max="100"
        ></progress>
        <p>TAILWIND CSS</p>
        <progress
          className="progress bg-white progress-success w-56"
          value="90"
          max="100"
        ></progress>
        <p>JAVASCRIPT</p>
        <progress
          className="progress bg-white progress-success w-56"
          value="80"
          max="100"
        ></progress>
        <p>REACT JS</p>
        <progress
          className="progress bg-white progress-success w-56"
          value="90"
          max="100"
        ></progress>
        <p>NEXT JS</p>
        <progress
          className="progress bg-white progress-success w-56"
          value="90"
          max="100"
        ></progress>
        <p>REDUX</p>
        <progress
          className="progress bg-white progress-success w-56"
          value="90"
          max="100"
        ></progress>
      </div>
    </div>
  );
};

export default Profile;
