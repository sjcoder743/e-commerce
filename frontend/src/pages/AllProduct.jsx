import React, { useState } from 'react'
import UploadProduct from '../components/UploadProduct'

function AllProduct() {
  const [openUploadProduct, setOpenUploadProduct] = useState(false)
  return (
    <div>
      <div className=" bg-white py-2 px-4 flex items-center justify-between">
        <h2 className='font-semibold text-lg'>All Products</h2>
        <button className='border-2 py-1 border-slate-300 text-blue-500 px-3 rounded-full hover:bg-slate-200 transition-all' onClick={() => setOpenUploadProduct(true)}>Upload Product</button>
      </div>

      {/* upload product component */}
      {
        openUploadProduct && (
          <UploadProduct onClose={() => setOpenUploadProduct(false)} />
        )
      }

    </div>
  )
}

export default AllProduct