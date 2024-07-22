const { default: summaryApi } = require("../common")

const fetchCategoryWiseProduct = async (category) => {
  const response = await fetch(summaryApi.categoryWiseProduct.url, {
    method: summaryApi.categoryWiseProduct.method,
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      category: category
    })
  })

  const dataResponse = await response.json()

  return dataResponse
}

export default fetchCategoryWiseProduct