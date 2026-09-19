import React ,{useState, useRef, useEffect} from 'react'
import api from '../shared/api.js'
import UrlBox from '../components/UrlBox.jsx'

const App = () => {

  const [urls, setUrls] = useState([])

  //Function fo take the all urls data from the backend
  async function fetchUrl (){
    try {
      const response = await api.get('/url')
      setUrls(response.data.data.urls)
      // const fetchedUrls = response?.data?.data?.urls
      // setUrls(Array.isArray(fetchedUrls) ? fetchedUrls : [])
    } catch (error) {
      console.error('Failed to fetch urls:', error)
      setUrls([])
    }
  }

  useEffect(()=>{
    fetchUrl()
  },[])

  //Delete URL function 

  const deleteURL = async (shortCode)=>{
    try {
      await api.delete(`/url/${shortCode}`)
      fetchUrl()
    } catch (error) {
      console.error('Feiled to Delete: ', error)
    }
  }

  //  console.log(urls)

  // redirect to main url function
  const redirectURL = async (shortCode)=>{
    try {
      await api.get(`url/${shortCode}`)
    } catch (error) {
      console.error('Failed to redirect to the main url: ', error)
    }
  }



  //create SHORT URL

  const formRef = useRef({url:''})
  const onSubmit= async (e)=>{
    e.preventDefault()
    const data = {
      url: formRef.current.url.value
    }
    console.log(data.url)
    try {
      await api.post('/url',data)
      fetchUrl()
    } catch (error) {
      console.error('Failed to create short URL: ', error)
    }
    
  }
  return (
    <>
    <div className='bg-red-500'>App</div>
    <form
    onSubmit={onSubmit}
    className='flex w-[90vw] justify-around p-5 border-2' 
    action="">
      <input 
      className='w-[80%] bg-yellow-300 p-4 h-[40px] '
      type="text" placeholder='Enter your URL'
      ref={(e)=>{formRef.current.url=e}}
       /> 
      
      <button 
      className='bg-slate-500 font-bold cursor-pointer px-2 rounded-xl text-white w-[10%] h-[40px] '> Shorten</button>
    </form>

    {
     
      urls.map((url)=><UrlBox key={url._id} fetchUrl={fetchUrl} originalURL={url.originalUrl} shortCode={url.shortCode} clickCount={url.click} deleteURL={deleteURL} redirectURL={redirectURL}/>)
    }
    </>
  )
}

export default App