import React, { useState, useEffect } from 'react'

export default function CheckBoxs() {
  const [data] = useState([{ name: 'one', check: false },
  { name: 'two', check: false },
  { name: 'three', check: false },
  { name: 'four', check: false },
  { name: 'five', check: false }])
  
  const [filter, setFilter] = useState([{ name: 'one', check: false },
  { name: 'two', check: false },
  { name: 'three', check: false },
  { name: 'four', check: false },
  { name: 'five', check: false }])


  const handleclick = (e) => {
    let arr = filter.map(item=>{return(item)});
    let some=arr.filter(a => a.name === e.target.name)
    some[0].check=!some[0].check
    setFilter(arr);
    console.log(filter);
    //console.log(arr);
    console.log(data);
  }
  const ondelet = () => {
    let arr = [...filter]
    let f = arr.filter(a => a.check === false)
    setFilter(f)
    //console.log(f);
  }
  const reset = () => {
    setFilter([...data])
    console.log(data);
  }
  return (
    <div>
      <input type="button" onClick={ondelet} value="delet" />
      <input type="button" onClick={reset} value="reset" />
      <ul>
        {
          filter.map((d, index) => {
            return <li key={index}><input type="checkbox" key={index} onClick={handleclick} defaultChecked={d.check} name={d.name} id="" />{d.name}</li>
          })
        }
      </ul>
      {/* {
        filter.map((d,index)=>{
          return <div key={index}><input type="checkbox" key={index} onClick={handleclick} defaultChecked={d.check} name={d.name} id=""/>{d.name}</div>
        })
      } */}
    </div>
  )
}
