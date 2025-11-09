import React from 'react'
import { useForm } from "react-hook-form";
import { signup, saveToken } from "../services/auth";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmitFunction(data) {
    const { fullName, email, password, confirmPassword, phone } = data;
    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }
    try {
      const res = await signup({ fullName, email, password, phone });
      if (res?.token) {
        saveToken(res.token);
        alert("Signed up successfully");
        window.location.assign('/');
      } else {
        alert("Signup failed: No token returned");
      }
    } catch (e) {
      alert(`Signup failed: ${e.message}`);
    }
  }

  return (
    <div className="h-[100vh] w-full flex justify-center items-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white shadow-lg rounded-2xl py-10 px-6 sm:px-12 w-[90%] sm:w-[500px] border border-gray-200">
        <h1 className="text-2xl font-semibold text-center text-blue-600 mb-6">
          Sign Up
        </h1>

        <form
          onSubmit={handleSubmit(onSubmitFunction)}
          className="flex flex-col gap-7 justify-center w-full items-center"
        >
          {/* Full Name */}
          <div className="flex flex-col gap-1 w-[275px]">
            <div className="flex justify-between w-full items-center">
              <label className="text-sm font-medium text-gray-700">Name:</label>
              <input
                {...register("fullName", {
                  required: { value: true, message: "Name is required" },
                  minLength: { value: 3, message: "Minimum length should be 3" },
                  pattern: {
                    value: /^[A-Za-z ]+$/,
                    message:
                      "Special characters and numbers are not allowed",
                  },
                })}
                type="text"
                placeholder="Enter Name"
                className={`pl-2 py-1 w-[185px] rounded-md text-sm border-2 focus:outline-none focus:ring-2 transition-all duration-200 ${
                  errors.fullName
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                }`}
              />
            </div>
            {errors.fullName && (
              <p className="text-red-500 text-xs text-right mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1 w-[275px]">
            <div className="flex justify-between w-full items-center">
              <label className="text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className={`pl-2 py-1 w-[185px] rounded-md text-sm border-2 focus:outline-none focus:ring-2 transition-all duration-200 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                }`}
                {...register("email", {
                  required: { value: true, message: "Email is required" },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs text-right mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1 w-[275px]">
            <div className="flex justify-between w-full items-center">
              <label className="text-sm font-medium text-gray-700">
                Password:
              </label>
              <input
                className={`pl-2 py-1 w-[185px] rounded-md text-sm border-2 focus:outline-none focus:ring-2 transition-all duration-200 ${
                  errors.password
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                }`}
                type="password"
                placeholder="Enter Password"
                {...register("password", {
                  required: { value: true, message: "password is required" },
                  minLength: {
                    value: 8,
                    message: "password length must be atleast 8",
                  },
                })}
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs text-right mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-1 w-[275px]">
            <div className="flex justify-between w-full items-center">
              <label className="text-sm font-medium text-gray-700">
                Confirm Password:
              </label>
              <input
                className={`pl-2 py-1 w-[185px] rounded-md text-sm border-2 focus:outline-none focus:ring-2 transition-all duration-200 ${
                  errors.confirmPassword
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                }`}
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "Confirm password is required",
                  },
                })}
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs text-right mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <input
            type="submit"
            disabled={isSubmitting}
            value={isSubmitting ? "Submitting..." : "Submit"}
            className={`w-[275px] py-2 rounded-lg font-semibold text-white transition-all duration-200 ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
            }`}
          />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
