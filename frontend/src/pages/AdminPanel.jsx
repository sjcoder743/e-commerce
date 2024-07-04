import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

function AdminPanel() {
  const user = useSelector((state) => state?.user.user);
  return (
    <div className='min-h-[calc(100vh-120px)] md:flex hidden'>
      <aside className='bg-white w-full min-h-full max-w-60 customShadow'>
        {/* user profile */}
        <div className='h-32 flex items-center justify-center flex-col'>
          <div className="text-5xl cursor-pointer flex relative justify-center mt-5">
            {user?.profilePhoto ? (
              <img
                src={user.profilePhoto}
                className="w-20 h-20 rounded-full"
                alt="User Profile"
              />
            ) : (
              <FaUserCircle />
            )}
          </div>
          <p className='capitalize font-semibold text-lg'>{user?.name}</p>
          <p className='text-sm'>{user?.role}</p>
        </div>

        {/* navigation */}
        <div className=''>
          <nav className='grid p-4'>
            <Link className='px-2 py-1 hover:bg-slate-200' to={"all-users"}>All Users</Link>
            <Link className='px-2 py-1 hover:bg-slate-200' to={"all-products"}>All Product</Link>
          </nav>
        </div>
      </aside>
      <main className='w-full h-full p-2'>
        <Outlet />
      </main>
    </div>
  )
}

export default AdminPanel