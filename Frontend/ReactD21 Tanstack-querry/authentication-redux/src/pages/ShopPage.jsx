import React from 'react'
import ProductCard from '../components/ProductCard'
import ProductsPageSkeleton from './ProductsPageSkeliton'
import { productHook } from '../hooks/productHook'
import Filters from '../components/filters'


const ShopPage = () => {
  

  console.log("this is shop page")

  const {isPending, data, error, filteredProd, filterProduct} = productHook()
  console.log("Products data in shop page:", data)
  data?.map((product)=>  {console.log("Products category in shop page:", product.category)})
  
  console.log("filter from shop",filteredProd)

  if(error){
    console.log("Error in fetching products:", error)
    
  }

  // useEffect()=>{
  //   getProductData()
  // },[])

  // console.log("Products state after useEffect:", productArr)
  
  // console.log("insPending",isPending)

  return (
    <div>

      <Filters filterProduct={filterProduct} />

      {isPending ? (
        <ProductsPageSkeleton count={8} />

      ):(
        <div className="grid grid-cols-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-10 w-fit">
        {
          filteredProd ? (filteredProd.map((product)=>{
            console.log("hi")
            // console.log("Product in map:", product.id)
            return <ProductCard className="bg-amber-500" key={product.id} product={product}  />
          })):(
          data?.map((product)=>{
            // console.log("Product in map:", product.id)
            return <ProductCard className="bg-amber-500" key={product.id} product={product}  />
          }))
        }
      </div>
      )
      }
    </div>
  )
}

export default ShopPage
  