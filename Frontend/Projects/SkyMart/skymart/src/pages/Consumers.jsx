import React,{useEffect, useSate} from 'react'
import axios from 'axios'
import { StoreContext } from '../context/StoreContext'
import ConsumerCard from '../components/ConsumerCard'
import UserLoading from '../components/UserLoading'

const Consumers = () => {

  const { consumers, setConsumers } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(true);

  let getConsumersData = async ()=>{
    try{

      let res = await axios.get("https://fakestoreapi.com/users");
      console.log("Consumers data from API: ", res.data);
      setConsumers(res.data);
      setLoading(false);

    }catch(err){
      console.log("Error in Consumers's API call: ", err);
    }
  }

  useEffect(()=>{
    getConsumersData();
  },[])
  
  if(loading){return (
    <div className = 'h-[calc(100vh-4rem)] flex flex-col items-center justify-center'>
      <UserLoading/>
    </div>
  )}

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='grid grid-cols-4 gap-4 p-4  w-[80%]'>
        {
        consumers.map((consumer)=>{
          return (<ConsumerCard key={consumer.id} consumer={consumer}/>)
        })
      }
      </div>
    </div>
  )
}

export default Consumers
    