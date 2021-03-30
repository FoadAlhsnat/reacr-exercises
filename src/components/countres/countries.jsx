import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Countries() {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState([])
  const [term, setTerm] = useState('');
  useEffect(() => {
    const seatch = async () => {
      const res = await axios.get('https://restcountries.eu/rest/v2/all')
      console.log(res.data);
      setData(res.data)
      setFilter(res.data)
    }
    seatch()
  }, [])

  useEffect(() => {
   // filter.filter((item) => console.log(item.name.toLowerCase()))
    let fill = data.filter((item) => item.name.toLowerCase().startsWith(term.toLocaleLowerCase()))
    setFilter(fill)
console.log(term);
    //console.log(fill);

  },[term])
  const RenderData = () => {
    if (data.length) {
      return filter.map((item) => {
        return <div key={item.alpha2Code}>{item.name}</div>
      })
    }
    return <></>
  }

  return (
    <div>
      <input type="text" name="search" value={term} onChange={(e) => setTerm(e.target.value)} />
      <span>{filter.length}</span>
      <RenderData />
    </div>
  )
}
