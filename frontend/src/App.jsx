import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import summaryApi from "./common";
import Context from "./context";

const App = () => {
  const fetchUserDetails = async () => {
    const dataRes = await fetch(summaryApi.current_user.url, {
      method: summaryApi.current_user.method,
      credentials: "include",
    });
    const apiData = await dataRes.json();
    console.log("Api data for home page: ", apiData);
  };
  useEffect(() => {
    fetchUserDetails()
  }, []);

  return (
    <>
      <Context.Provider value={{
        fetchUserDetails
      }}>
        <ToastContainer />
        <Header />
        <main className="min-h-[calc(100vh-120px)]">
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </>
  );
};

export default App;
