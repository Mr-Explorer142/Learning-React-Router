import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(false);
    const handleSignedIn = () => {
      setIsSignedIn(true);
      navigate("/");
    };

    const handleSignedOut = () => {
      setIsSignedIn(false);
      navigate("/sign-in");
    };
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
          <div className="container-fluid mx-lg-5">
            <Link
              className="navbar-brand text-white"
              aria-current="page"
              to="/"
            >
              Explorer
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto py-2">
                {/* Home */}
                <li className="nav-item">
                  <Link
                    className="nav-link text-white"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                {/* About */}
                <li className="nav-item">
                  <Link
                    className="nav-link text-white"
                    aria-current="page"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                {/* Contact */}
                <li className="nav-item">
                  <Link
                    className="nav-link text-white"
                    aria-current="page"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
                {!isSignedIn && (
                  <>
                    {/* Sign In */}
                    <li className="nav-item">
                      <Link
                        className="nav-link text-white bg-success rounded btn btn-success d-inline-block p-2 ms-lg-2"
                        aria-current="page"
                        to="/sign-in"
                        onClick={handleSignedIn}
                      >
                        Sign In
                      </Link>
                    </li>
                  </>
                )}
                {isSignedIn && (
                  <>
                    {/* Signout */}
                    <li className="nav-item">
                      <Link
                        className="nav-link text-white border border-success rounded btn btn-success d-inline-block p-2 ms-lg-2 mt-2"
                        aria-current="page"
                        to="/sign-out"
                        onClick={handleSignedOut}
                      >
                        Sign Out
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* Main */}
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default Header;
