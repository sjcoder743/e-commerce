import React, { useState, useEffect, useMemo } from "react";
import summaryApi from "../common";
import { toast } from "react-toastify";
import moment from "moment";
import { MdModeEdit } from "react-icons/md";
import ChangeUserRole from "../components/ChangeUserRole";

function AllUser() {
  const [allUser, setAllUser] = useState([]);
  const [openUpdateRole, setOpenUpdateRole] = useState(false);
  const [updateUserDetails, setUpdateUserDetails] = useState({
    email: "",
    name: "",
    role: "",
    _id: "",
  });

  const fetchAllUsers = async () => {
    try {
      const response = await fetch(summaryApi.allUsers.url, {
        method: summaryApi.allUsers.method,
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();

      if (data.success) {
        setAllUser(data.data);
      } else {
        toast.error(data.data);
      }
    } catch (error) {
      toast.error("Failed to fetch users");
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const tableRows = useMemo(() => {
    return allUser.map((el, index) => {
      return (
        <tr key={el._id}>
          <td>{index + 1}</td>
          <td className="capitalize">{el.name}</td>
          <td>{el.email}</td>
          <td>{el.role}</td>
          <td>{moment(el.createdAt).format("LLL")}</td>
          <td>
            <button
              className="bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white"
              onClick={() => {
                setUpdateUserDetails(el);
                setOpenUpdateRole(true);
              }}
            >
              <MdModeEdit />
            </button>
          </td>
        </tr>
      );
    });
  }, [allUser]);

  return (
    <div className="bg-white pb-4">
      <table className="w-full userTable">
        <thead>
          <tr className="bg-slate-600/25 text-blue-500">
            <th>Sr.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Created Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>

      {openUpdateRole && (
        <ChangeUserRole
          onClose={() => setOpenUpdateRole(false)}
          name={updateUserDetails.name}
          email={updateUserDetails.email}
          role={updateUserDetails.role}
          userId={updateUserDetails._id}
          callFunc={fetchAllUsers}
        />
      )}
    </div>
  );
}

export default AllUser;