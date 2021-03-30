import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Foad() {
  const [term, setTerm] = useState('hooks')
  const [data, setData] = useState([])
  const [errmsg, setErrmsg] = useState('')
  useEffect(() => {
    console.log('hi');
    Feachdata()
  }, [])

  const Feachdata = async () => {
    try {
      const res = await axios.get(`https://hn.algolia.com/api/v1/search?query=${term}`)
      console.log(res.data.hits);
      setData(res.data.hits)
    } catch (error) {
      console.log(error);
    }
  }

  const RenderData = () => {
    return data.map(item =>{return <div key={item.objectID}><a href={item.url}>{item.title}</a></div>} )
  }
  return (
    <div>
      <input type="text" name="" value={term} onChange={(e) => setTerm(e.target.value)} id="" />
      <input type="button" onClick={Feachdata} value="Go!" />
      <RenderData />
    </div>
  )
}
