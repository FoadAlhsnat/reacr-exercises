import React,{useEffect,useState} from 'react'
import axios from 'axios'
export default function Feach() {
  const [data,setData]=useState(null)
  useEffect(()=>{
    const seatch= async ()=>{
      const res=await axios.get('https://swapi.dev/api/films/1/')
      console.log(res.data);
      setData(res.data)
    }
    seatch()
  },[])

  const renderdata=()=>{

  }
  return (
    <div>
      {data?<div><h1>{data.title}</h1><h2>{data.director}</h2></div>:<></>}
    </div>
  )
}
