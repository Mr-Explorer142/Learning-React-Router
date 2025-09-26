import React, { useRef } from "react";
import { useNavigate } from "react-router";

const SignIn = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // console.log("Submit:", email, " -> ", password);

    if (email === "tahmidalamtamim142@gmail.com" && password == "123456") {
      const user = {
        name: "Tahmid Alam Tamim",
        email: "tahmidalamtamim142@gmail.com",
        city: "Dhaka",
        country: "Bangladesh",
      };
      navigate("/profile", { state: user });
    } else {
      navigate("/sign-in");
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="mt-5 p-4 w-100 w-lg-50-custom">
          <form className="border border-2 border-success form-bg p-5 rounded-3" onSubmit={handleOnSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                ref={emailRef}
                name="email"
                className="form-control border border-success"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                ref={passwordRef}
                name="password"
                className="form-control border-success"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
