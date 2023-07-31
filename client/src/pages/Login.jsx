import React from "react";

const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-4/12 bg-gray-100 p-8 shadow-xl">
        <h1 className="text-4xl  font-semibold text-center">
          Pharmacy Management System
        </h1>
        <h3 className="text-2xl mb-10 mt-4 font-semibold text-center">Login</h3>
        <form>
          <p>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full bg-transparent"
            />
          </p>
          <p className="mt-2">
            <input
              type="text"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full bg-transparent "
            />
          </p>
          <button className="btn btn-neutral mt-2 w-full mt-4">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
