import React,{useState, useEffect} from 'react'
import axios from 'axios'

const TestApp = () => {
    console.log("TestApp component rendering............")
    // const [render, setRender] = useState(0)

    const [productData, setProductData] = useState([])
    console.log("productData state declared............")

    let getProductData = async () => {
        console.log("waiting for data fetching............")
        const res = await axios.get("https://fakestoreapi.com/products")
        console.log("data fetched............")
        setProductData(res.data)
        console.log("setProductData function called............")
        console.log("ProductData state value", productData)
        console.log("ProductData state value", res.data)
        console.log("setProductData called but not executed yet as it is asynchronous it will execute and rerender the page after exicution of getProductData scope code, just after this line............")
    }
    
    console.log("getProductData function declared............")
    console.log("ProductData state value", productData)

    useEffect(() => {
        getProductData()
    }, [])

    console.log("getProductData function called inside useEffect............")

  return (
    <div>
      <h1>This is TestApp</h1>
      <button 
    //   onClick={()=> setRender(prev => prev+1)} 
      className="bg-blue-500 text-white px-4 py-2 rounded">
        Click me {
        //render
        }
      </button>





    </div>
  )
}

export default TestApp
