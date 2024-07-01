import React, { useContext, useState } from "react";
import LogInIcon from "../assets/signin.gif";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import summaryApi from "../common/index.jsx"
import { useNavigate } from "react-router-dom";
import Context from "../context/index.jsx";


function LogIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate()
  const { fetchUserDetails } = useContext(Context)

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

  // handle submit (form submit)
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Summary api is : ", summaryApi);

    try {
      const resData = await fetch(summaryApi.signIn.url, {
        method: summaryApi.signIn.method,
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      // Check if the response status is not ok
      if (!resData.ok) {
        const errorText = await resData.text();  // Read the response as text
        console.error("Server Error:", errorText);  // Log the error text
        toast.error(`Server error: ${resData.status} - ${resData.statusText}`);
        return;
      }

      const apiData = await resData.json();

      if (apiData.success) {
        toast.success(apiData.message);
        navigate("/")
        fetchUserDetails()

      } else if (apiData.error) {
        toast.error(apiData.message);
      }

      console.log("Log in data is: ", apiData);
    } catch (error) {
      console.error("Error:", error);
      toast.error(`Fetch error: ${error.message}`);
    }
  };


  return (
    <section id="login">
      {/* main container */}
      <div className="mx-auto container p-7">
        <div className="bg-white p-8 py-5 w-full max-w-md mx-auto rounded-md">
          {/* image */}
          <div className="w-20 h-20 mx-auto">
            <img src={LogInIcon} alt="logInIcon" />
          </div>
          {/* form */}
          <form onSubmit={handleSubmit} className="pt-4 flex flex-col gap-3">
            {/* email */}
            <div className="grid">
              <div className="flex items-center justify-between relative">
                <label htmlFor="email" className="font-semibold">
                  Email :{" "}
                </label>
                <Link
                  to={"/login"}
                  className="text-2xl absolute right-5 cursor-pointer"
                >
                  <MdOutlineEmail />
                </Link>
              </div>
              <div className="bg-slate-100 p-2 ">
                <input
                  className="h-full rounded-sm w-full bg-transparent outline-none"
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleOnChange}
                  value={data.email}
                  placeholder="Enter your email..."
                  required
                />
              </div>
            </div>

            {/* password */}
            <div>
              <div className="flex items-center justify-between relative">
                <label htmlFor="password" className="font-semibold">
                  Password :{" "}
                </label>
                <Link
                  to={"/login"}
                  className="text-2xl absolute right-5 cursor-pointer"
                >
                  <RiLockPasswordLine />
                </Link>
              </div>

              <div className="bg-slate-100 p-2 flex ">
                <input
                  className="h-full rounded-sm w-full bg-transparent outline-none"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  onChange={handleOnChange}
                  value={data.password}
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
              {/* Forgot password */}
              <Link to={"/forgot-password"} className="block w-fit ml-auto hover:underline hover:text-red-600">Forgot password</Link>
            </div>

            {/* button for logIn */}
            <button className="mt-5 px-4 py-2 bg-slate-700/25 text-blue-500 rounded-full hover:bg-slate-800/5 w-24">
              LogIn
            </button>
          </form>

          {/* if you have no account */}
          <p className="my-4 font-semibold">Don't have account ? <Link to={"/signup"} className="text-slate-700 hover:text-slate-500">  signUp</Link ></p>
        </div>
      </div >
    </section >
  );
}

export default LogIn;
