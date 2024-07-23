const backendDomain = "http://localhost:8080";
const summaryApi = {
  signUp: {
    url: `${backendDomain}/api/signup`,
    method: "post",
  },
  signIn: {
    url: `${backendDomain}/api/signin`,
    method: "post",
  },
  current_user: {
    url: `${backendDomain}/api/user-details`,
    method: "get",
  },
  logOutUser: {
    url: `${backendDomain}/api/logout`,
    method: "get",
  },
  allUsers: {
    url: `${backendDomain}/api/all-users`,
    method: "get",
  },
  updateUser: {
    url: `${backendDomain}/api/update-user`,
    method: "post",
  },
  uploadProduct: {
    url: `${backendDomain}/api/upload-product`,
    method: "post",
  },
  allProduct: {
    url: `${backendDomain}/api/get-product`,
    method: "get",
  },
  updateProduct: {
    url: `${backendDomain}/api/update-product`,
    method: "post",
  },
  productCategory: {
    url: `${backendDomain}/api/get-product-category`,
    method: 'get'
  },
  filterProduct: {
    url: `${backendDomain}/api/filter-product`,
    method: 'post'
  },
  productThroughtCate: {
    url: `${backendDomain}/api/category-vise-product`,
    method: 'post'
  },
  productDetails: {
    url: `${backendDomain}/api/product-details`,
    method: 'post'
  },
  addToCartProduct: {
    url: `${backendDomain}/api/add-to-cart`,
    method: 'post'
  },
  addToCartProductCount: {
    url: `${backendDomain}/api/count-cart-product`,
    method: 'get'
  },
  addToCartView: {
    url: `${backendDomain}/api/view-cart-product`,
    method: 'get'
  },
  updateCartProduct: {
    url: `${backendDomain}/api/update-cart-product`
  },
  deleteCartProduct: {
    url: `${backendDomain}/api/delete-cart-product`,
    method: 'post'
  },
  searchProduct: {
    url: `${backendDomain}/api/search`,
    method: 'get'
  }
};

export default summaryApi;
