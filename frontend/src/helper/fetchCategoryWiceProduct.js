import  summaryApi  from "../common";
const fetchCategoryWiseProduct = async (category) => {
  const response = await fetch(summaryApi.productThroughtCate.url, {
    method: summaryApi.productThroughtCate.method,
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