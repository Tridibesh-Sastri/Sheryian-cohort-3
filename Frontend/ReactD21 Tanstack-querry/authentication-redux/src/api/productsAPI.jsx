import { axiosInstance } from "../config/axiosInstance";

export  const getProductDataApi = async () => {
    try{
        console.log("Calling ProductData api...........")
      const response = await axiosInstance.get('/products')

    //   console.log("Product Data:", response.data.products)
    //   setProductArr(response.data.products)
    //   setProductLoading(false)
      return response.data.products
    //   console.log("Products state:", productArr)

    }catch(err){
      console.log("Error in ProductData api calling",err)

    }

  }