import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authenticatio/Authenticatio";

const SignUp = () => {
  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const userData = { name, email, password };
    console.log(name, email, password);
    fetch(`https://my-portfolio-server-eight-beta.vercel.app/user`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("user data is post on db successfully", data);
      });

    signUp(email, password)
      .then((user) => {
        console.log(user);
        navigate("/");
        form.reset();
      })
      .then((err) => console.error(err));
  };

  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content">
          <div className="card-body">
            <form className="lg:w-96 w-full" onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold text-green-500">Sing Up</h2>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="name"
                className="input input-bordered w-full"
              />

              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="email"
                className=" input input-bordered w-full"
              />

              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="password"
                className="input input-bordered w-full"
              />
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Sign Up
                </button>
                <p>
                  if you have a account then{" "}
                  <Link className="text-primary" to={"/login"}>
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
