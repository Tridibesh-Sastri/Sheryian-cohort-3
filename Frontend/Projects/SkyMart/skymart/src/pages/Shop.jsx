import React,{useEffect,useState} from 'react'
import {useNavigate, Outlet} from 'react-router'
import { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
// import axios from 'axios'
import { axiosInstance } from '../config/axionInstance'
import ProductCard from '../components/ProductCard'
import ProductLoading from '../components/ProductLoading'

const Shop = () => {
  const [isLoading, setIsLoading] = useState(true);

  console.log("Shop.jsx rendering........");
  const navigate = useNavigate();

  const{ products, setProducts } = useContext(StoreContext);

  const getProductsData = async ()=>{
      try{

      // const res = await axios.get("https://fakestoreapi.com/products")
      const res = await axiosInstance.get("/products");
      setProducts(res.data);
      setIsLoading(false);
      console.log("Products res.dat from API: ", res.data);
      console.log("Products data from API: ", res);

    }catch(err){
      console.log("Error in Shop Products fetching: ", err);
    }
  }

  useEffect(()=>{
    getProductsData();
  },[])

  console.log("Products in Shop.jsx: ", products);
  console.log("isLoading in Shop.jsx: ", isLoading);
  
  if(isLoading){
    return(
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <ProductLoading />
      </div>)
  }

  // const children = outlet();
  return (
    <div className="
    min-h-screen
    bg-slate-950
    p-6 sm:p-8 lg:p-10
  ">
      <div className="
      grid grid-cols-1 gap-6
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
    ">
        {
          products.map((product)=>{
            return <ProductCard 
              key={product.id} 
              product={product}/>;
          })
        }
      </div>
      
      <Outlet/>
    </div>
  )
}

export default Shop
