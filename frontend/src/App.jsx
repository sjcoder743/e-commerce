import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import summaryApi from "./common";
import Context from "./context";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/userSlice";

const App = () => {
  const dispatch = useDispatch();

  const fetchUserDetails = async () => {
    try {
      const dataRes = await fetch(summaryApi.current_user.url, {
        method: summaryApi.current_user.method,
        credentials: "include",
      });
      const apiData = await dataRes.json();
      console.log("Api data for home page: ", apiData);
      if (apiData.success) {
        dispatch(setUserDetails(apiData.data));
      }
    } catch (error) {
      console.error("Failed to fetch user details: ", error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <Context.Provider value={{ fetchUserDetails }}>
      <ToastContainer />
      <Header />
      <main className="min-h-[calc(100vh-120px)]">
        <Outlet />
      </main>
      <Footer />
    </Context.Provider>
  );
};

export default App;
