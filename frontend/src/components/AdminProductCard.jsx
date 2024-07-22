import React, { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import AdminEditProduct from "./AdminEditProduct.jsx";
import displayINRCurrency from "../helper/displayCurrency.js";

function AdminProductCard({ data, fetchData }) {
  const [editProduct, setEditProduct] = useState(false);

  return (
    <div className="bg-white p-4 rounded ">
      <div className='w-40'>

        <div className="w-32 h-32 flex justify-center items-center">
          <img
            src={data?.productImage[0]}
            alt="img"
            className="mx-auto object-fill h-full"
          />
        </div>

        <h1 className="text-ellipsis line-clamp-2">{data.productName}</h1>
        
        <div>
          <p className="font-semibold">{displayINRCurrency(data.sellingPrice)}</p>

          <div
            className="w-fit ml-auto p-2 bg-green-100 hover:bg-green-400 rounded-full hover:text-white cursor-pointer"
            onClick={() => setEditProduct(true)}
          >
            <MdModeEditOutline />
          </div>
        </div>
      </div>
      {editProduct && (
        <AdminEditProduct
          productData={data}
          onClose={() => setEditProduct(false)}
          fetchdata={fetchData}
        />
      )}
    </div>
  );
}

export default AdminProductCard;
