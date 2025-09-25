import React from "react";
import { useNavigate } from "react-router";

const Contact = () => {

  const navigate = useNavigate();
  
  const handleGoToHome = () => {
    navigate('/');
  }

  return (
    <>
      <div className="p-2">
        <h1>Welcome to Contact Page</h1>
        <button className="btn btn-primary mt-2" onClick={handleGoToHome}>Go to Home Page</button>
      </div>
    </>
  );
};

export default Contact;
