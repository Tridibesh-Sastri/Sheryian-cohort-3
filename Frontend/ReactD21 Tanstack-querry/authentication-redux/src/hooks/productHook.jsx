import { useQuery } from "@tanstack/react-query"
import { getProductDataApi } from "../api/productsAPI"
import { useState } from "react"

export const productHook = () => {

    const [filteredProd, setFilteredProd] = useState(null)
  
    let {isPending, data, error} = useQuery({
    queryKey: ['products'],
    queryFn: getProductDataApi,
    staleTime: 5000,
  })


  let filterProduct = (searchParams) => {
    // console.log("searchParams in filterProduct:", searchParams)
    let filter = data.filter((product) => product.title.toLowerCase().includes(searchParams.toLowerCase()))
    setFilteredProd(filter)
    // console.log("filteredData in filterProduct:", filteredProd)
  }

  return {isPending, data, error, filterProduct, filteredProd}
}