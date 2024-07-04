import React, { useState } from "react";
import LogInIcon from "../assets/signin.gif";
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import imageToBase64 from "../helper/imageToBase64.js";
import summaryApi from "../common/index.jsx";
import { toast } from "react-toastify";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    profilePhoto: ""
  });
  const navigate = useNavigate()
  // handleOnChange function (extracting value from the input fields)
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };
  console.log("Data SignUp is: ", data);

  // handle submit (form submit)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.password === data.confirmPassword) {
      console.log("summary api is :", summaryApi);
      const dataResponse = await fetch(summaryApi.signUp.url, {
        method: summaryApi.signUp.method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const apiData = await dataResponse.json();
      if (apiData.success) {
        toast.success(apiData.message)
        navigate("/login")
      }
      if (apiData.error) {
        toast.error(apiData.message)
      }
      console.log("Data : ", apiData);
    } else {
      toast.error("Both the password must be same");
    }
  };

  // For uploading photo
  const handleUploadPhoto = async (e) => {
    const file = e.target.files[0];
    console.log("File : ", file);
    const image = await imageToBase64(file);
    console.log("image : ", image);

    setData((prev) => {
      return {
        ...prev,
        profilePhoto: image
      };
    });
  };

  return (
    <section id="signup">
      {/* main container */}
      <div className="mx-auto container p-7">
        <div className="bg-white p-8 py-5 w-full max-w-md mx-auto rounded-md">
          {/* image */}
          <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
            <div>
              <img src={data.profilePhoto || LogInIcon} alt="logInIcon" />
            </div>
            <form>
              <label>
                <input type="file" className="hidden" onChange={handleUploadPhoto} />
                <div className="text-xs bg-slate-400 pb-5 text-center absolute bottom-0 w-full bg-opacity-70 font-semibold cursor-pointer">
                  Upload image
                </div>
              </label>
            </form>
          </div>

          {/* form */}
          <form className="pt-4 flex flex-col gap-3" onSubmit={handleSubmit}>

            {/* Name */}
            <div className="grid">
              <div className="flex items-center justify-between relative">
                <label htmlFor="name" className="font-semibold">
                  Name :{" "}
                </label>
              </div>
              <div className="bg-slate-100 p-2">
                <input
                  className="h-full rounded-sm w-full bg-transparent outline-none"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name..."
                  required
                  onChange={handleOnChange}
                  value={data.name}
                />
              </div>
            </div>

            {/* Email */}
            <div className="grid">
              <div className="flex items-center justify-between relative">
                <label htmlFor="email" className="font-semibold">
                  Email :{" "}
                </label>
              </div>
              <div className="bg-slate-100 p-2">
                <input
                  className="h-full rounded-sm w-full bg-transparent outline-none"
                  type="email"
                  name="email"
                  onChange={handleOnChange}
                  value={data.email}
                  id="email"
                  placeholder="Enter your email..."
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between relative">
                <label htmlFor="password" className="font-semibold">
                  Password :{" "}
                </label>
              </div>

              <div className="bg-slate-100 p-2 flex">
                <input
                  className="h-full rounded-sm w-full bg-transparent outline-none"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={handleOnChange}
                  value={data.password}
                  id="password"
                  placeholder="Enter your password..."
                  required
                />
                <div className="cursor-pointer relative" onClick={() => setShowPassword((prev) => !prev)}>
                  <span className="absolute right-4 text-xl">
                    {showPassword ? (
                      <BsEyeSlashFill />
                    ) : (
                      <IoEyeSharp />)}
                  </span>
                </div>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <div className="flex items-center justify-between relative">
                <label htmlFor="confirmPassword" className="font-semibold">
                  Confirm Password :{" "}
                </label>
              </div>

              <div className="bg-slate-100 p-2 flex">
                <input
                  className="h-full rounded-sm w-full bg-transparent outline-none"
                  type={showConfirmPassword ? "text" : "password"}
                  onChange={handleOnChange}
                  value={data.confirmPassword}
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Enter the same password again..."
                  required
                />
                <div className="cursor-pointer relative" onClick={() => setShowConfirmPassword((prev) => !prev)}>
                  <span className="absolute right-4 text-xl">
                    {showConfirmPassword ? (
                      <BsEyeSlashFill />
                    ) : (
                      <IoEyeSharp />)}
                  </span>
                </div>
              </div>
            </div>

            {/* button for signUp */}
            <button className="mt-5 px-4 py-2 bg-slate-700/25 text-blue-500 rounded-full hover:bg-slate-800/5 w-24">
              SignUp
            </button>
          </form>

          {/* If you already have an account */}
          <p className="my-4 font-semibold">
            Already have an account? <Link to={"/login"} className="text-slate-700 hover:text-slate-500">Log In</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
