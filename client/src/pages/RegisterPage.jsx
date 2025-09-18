import React, { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add register logic (API call)
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-myblack">
      <div className="w-full max-w-md p-6 bg-myindigo text-myamber rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Register to inspireLog</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-myamber-light mb-2 text-sm font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-myoffwhite text-myblack rounded-md focus:outline-none focus:ring-2 focus:ring-mycyan"
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-myamber-light mb-2 text-sm font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-myoffwhite text-myblack rounded-md focus:outline-none focus:ring-2 focus:ring-mycyan"
              placeholder="Enter your password"
              required
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-myamber text-myblack font-bold rounded-md hover:bg-myamber-dark transition duration-300"
          >
            Register
          </button>
        </form>
        {/* Register Link */}
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-mycyan hover:underline"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
