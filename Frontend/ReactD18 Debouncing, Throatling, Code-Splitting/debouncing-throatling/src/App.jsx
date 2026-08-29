import React, {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
  console.log("App component rendering............")
  const [searchData, setSearchData] = useState(null)
  // console.log("searchData", searchData)
  

  const [productData, setProductData] = useState([])
  // console.log(productData[0]?.title)
  let getProductData = async () => {
    let res = await axios.get("https://fakestoreapi.com/products")
    setProductData(res.data)
  }


  let filteredData = ()=>{
    let result = productData.filter((item)=>{
      // console.log("item.title", item.title)
      return item .title.toLowerCase().includes(searchData.toLowerCase())
      // return item.title === searchData
    })
    // return result
    console.log("filtered result ", result)
    setProductData(result)
  }

  // Debouncing...........
  useEffect(()=>{
    if (!searchData) return
    let timeout = setTimout(()=>{
      filteredData()
    },700 )
    return () => clearTimeout(timeout)
  },[searchData])

  // filteredData()

  useEffect(() => {
    getProductData();
  }, [])
  
  return (
    <div className="bg-gray-800 text-white h-screen">

      <input 
      className="bg-gray-700 text-white px-4 py-2 rounded mb-4 "
      type="text" 
      placeholder="Search products..." 
      onChange={(e) => {
        setSearchData(e.target.value);
        // filteredData()
        }
      } 
      />
      <span>{searchData}</span>


      <h1>This is App</h1>
      {
        productData.map((item) => {
          return (<h1 key = {item.id}> {item.title} </h1>)
        })
      }
    </div>
  )
}

export default App
