import React, { useEffect, useState } from "react";
import UploadProduct from "../components/UploadProduct";
import summaryApi from "../common";
import AdminProductCard from "../components/AdminProductCard";

function AllProduct() {
  const [openUploadProduct, setOpenUploadProduct] = useState(false);
  const [allProduct, setAllProduct] = useState([]);

  const fetchAllProduct = async () => {
    const res = await fetch(summaryApi.allProduct.url);
    const resFromData = await res.json();
    console.log(`Product data: ${resFromData}`);
    setAllProduct(resFromData?.data || []);
  };

  useEffect(() => {
    fetchAllProduct();
  }, []);

  return (
    <div>
      <div className=" bg-white py-2 px-4 flex items-center justify-between">
        <h2 className="font-semibold text-lg">All Products</h2>
        <button
          className="border-2 py-1 border-slate-300 text-blue-500 px-3 rounded-full hover:bg-slate-200 transition-all"
          onClick={() => setOpenUploadProduct(true)}
        >
          Upload Product
        </button>
      </div>

      {/* AllProduct */}
      <div className="flex items-center flex-wrap gap-5 py-4 h-[calc(100vh-190px)] overflow-y-scroll">
        {allProduct.map((product, index) => {
          return <AdminProductCard data={product} key={index + "allProduct"} fetchData={fetchAllProduct} />;
        })}
      </div>

      {/* upload product component */}
      {openUploadProduct && (
        <UploadProduct onClose={() => setOpenUploadProduct(false)} fetchData={fetchAllProduct} />
      )}
    </div>
  );
}

export default AllProduct;
