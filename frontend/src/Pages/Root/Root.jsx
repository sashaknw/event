
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/auth/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/auth/login">Log In</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Welcome to Our App</h1>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
