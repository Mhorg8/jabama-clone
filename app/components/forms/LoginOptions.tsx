import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const LoginOptions = () => {
  return (
    <div className="flex w-full justify-between items-center gap-x-3">
      <div className="login__button">
        <h3>Github</h3>
        <FaGithub />
      </div>
      <div className="login__button">
        <h3>Google</h3>
        <FaGoogle />
      </div>
    </div>
  );
};

export default LoginOptions;
