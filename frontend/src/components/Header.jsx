import React, { useState } from "react";
import Logo from "./Logo";
import { FaSearch, FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import summaryApi from "../common";
import { toast } from "react-toastify";
import { setUserDetails } from "../store/userSlice";


function Header() {
  const user = useSelector((state) => state?.user.user);
  const [displayMenu, setDisplayMenu] = useState(false);

  const dispatch = useDispatch();

  // function for logout user
  const handleLogOut = async () => {
    const fetchData = await fetch(summaryApi.logOutUser.url, {
      method: summaryApi.logOutUser.method,
      credentials: 'include'
    });
    const apiData = await fetchData.json();
    if (apiData.success) {
      toast.success(apiData.message);
      dispatch(setUserDetails(null));
    } else if (apiData.error) {
      toast.error(apiData.message);
    }
  };

  return (
    <header className="h-16 shadow-lg bg-white">
      <div className="container mx-auto h-full flex items-center px-8 justify-between">
        {/* logo */}
        <div>
          <Link to={"/"}>
            <Logo w={90} h={50} />
          </Link>
        </div>

        {/* search */}
        <div className="hidden lg:flex w-full justify-between max-w-sm items-center border rounded-full focus-within:shadow-md pl-2">
          <input
            type="text"
            placeholder="Search Product here..."
            className="outline-none w-full"
          />
          <div className="text-lg min-w-[50px] h-8 bg-slate-700/25 text-blue-500 flex items-center justify-center px-3 rounded-r-full">
            <FaSearch />
          </div>
        </div>

        {/* userIcon */}
        <div className="flex gap-4 items-center">
          <div className="relative group flex justify-center">
            <div className="text-2xl cursor-pointer ">
              {user?.profilePhoto ? (
                <img
                  src={user.profilePhoto}
                  className="w-10 h-10 rounded-full"
                  alt="User Profile"
                  onClick={() => setDisplayMenu(prev => !prev)}
                />
              ) : (
                <FaUserCircle onClick={() => setDisplayMenu(prev => !prev)} />
              )}
            </div>
            {displayMenu && (
              <div className="absolute bg-white top-12 shadow-lg rounded p-2 h-fit">
                <nav>
                  <Link to="/admin-panel" className="whitespace-nowrap hover:bg-slate-100 p-2 " onClick={() => setDisplayMenu(prev => !prev)}>
                    Admin panel
                  </Link>
                </nav>
              </div>
            )}
          </div>

          {/* userCard */}
          <div className="text-2xl cursor-pointer relative">
            <FaShoppingCart />
            {/* CountForOrder */}
            <div className="bg-slate-700/25 text-blue-500 font-semibold w-5 p-2 flex justify-center items-center rounded-full h-5 absolute -top-4 -right-2">
              <p className="text-sm">0</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-x-2">
            {user ? (
              <button
                onClick={handleLogOut}
                className="bg-slate-700/25 text-blue-500 hover:bg-slate-800/5 px-3 py-1 rounded-full"
              >
                LogOut
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="bg-slate-700/25 text-blue-500 hover:bg-slate-800/5 px-3 py-1 rounded-full"
                >
                  LogIn
                </Link>
                <Link
                  to="/signup"
                  className="bg-slate-700/25 text-blue-500 px-3 py-1 rounded-full hover:bg-slate-800/5"
                >
                  SignUp
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
