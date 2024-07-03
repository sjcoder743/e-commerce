import React from "react";
import Logo from "./Logo";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const user = useSelector((state) => state?.user.user);

  console.log("user details in header : ", user);
  return (
    <header className="h-16 shadow-lg bg-white">
      <div className="container mx-auto h-full flex items-center px-8 justify-between">
        {/* logo */}
        <div className="">
          <Link to={"/"}>
            <Logo w={90} h={50} />
          </Link>
        </div>

        {/* search */}
        <div className="hidden lg:flex w-full justify-between max-w-sm items-center border rounded-full focus-within:shadow-md pl-2 ">
          <input
            type="text"
            placeholder="Search Product here..."
            className="outline-none w-full "
          />
          <div className="text-lg min-w[50px] h-8 bg-slate-700/25 text-blue-500 flex items-center justify-center px-3 rounded-r-full ">
            <FaSearch />
          </div>
        </div>

        {/* userIcon */}
        <div className="flex gap-4 items-center">
          <div className="text-2xl cursor-pointer">
            {user?.profilePhoto ? (
              <img src={user.profilePhoto} className="w-10 h-10 rounded-full" alt="User Profile" />
            ) : (
              <FaUserCircle />
            )}
          </div>

          {/* userCard */}
          <div className="text-2xl cursor-pointer relative">
            <span>
              {" "}
              <FaShoppingCart />
            </span>

            {/* CountForOrder */}
            <div className="bg-slate-700/25 text-blue-500 font-semibold w-5 p-2 flex justify-center items-center rounded-full h-5 absolute -top-4 -right-2">
              <p className="text-sm">0</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-x-2">
            {/* LogIn button */}
            <Link
              to={"/login"}
              className=" bg-slate-700/25 text-blue-500 hover:bg-slate-800/5 px-3 py-1 rounded-full"
            >
              LogIn
            </Link>
            {/* signUp button */}
            <Link
              to={"/signup"}
              className=" bg-slate-700/25 text-blue-500 px-3 py-1 rounded-full hover:bg-slate-800/5"
            >
              SignUp
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
