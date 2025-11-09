import React from 'react'
import { useForm } from "react-hook-form";
import { login, saveToken } from "../services/auth";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function submitFn(data) {
    try {
      const res = await login({ email: data.email, password: data.password });
      if (res?.token) {
        saveToken(res.token);
        alert("Logged in successfully");
        window.location.assign('/');
      } else {
        alert("Login failed: No token returned");
      }
    } catch (error) {
      alert(`Login failed: ${error.message}`);
    }
  }

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gradient-to-br from-gray-100 to-gray-200">
      <form
        onSubmit={handleSubmit(submitFn)}
        className="bg-white shadow-xl rounded-2xl px-10 py-8 w-[90%] sm:w-[400px] flex flex-col space-y-6"
      >
        <h1 className="text-2xl font-semibold text-center text-gray-700 mb-2">
          Login
        </h1>

        {/* Email Field */}
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            autoComplete="email"
            aria-invalid={errors.email ? "true" : "false"}
            className={`border-2 rounded-lg px-3 py-2 text-sm focus:outline-none transition-all duration-200 ${
              errors.email
                ? "border-red-500 focus:ring-2 focus:ring-red-400"
                : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            }`}
            {...register("email", {
              required: { value: true, message: "Email is required" },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
              setValueAs: (v) => (typeof v === "string" ? v.trim() : v),
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            autoComplete="current-password"
            aria-invalid={errors.password ? "true" : "false"}
            className={`border-2 rounded-lg px-3 py-2 text-sm focus:outline-none transition-all duration-200 ${
              errors.password
                ? "border-red-500 focus:ring-2 focus:ring-red-400"
                : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            }`}
            {...register("password", {
              required: { value: true, message: "Password is required" },
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <input
          type="submit"
          disabled={isSubmitting}
          value={isSubmitting ? "Submitting..." : "Submit"}
          className={`w-full mt-3 py-2 rounded-lg text-white font-semibold transition-all duration-200 ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
          }`}
        />
      </form>
    </div>
  );
};

export default Login;
