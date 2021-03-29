import React, { useState } from 'react'
import './todo.css'
export default function TodoApp() {
  const data = [
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
  ]
  const [less, setLess] = useState(data)
  const handleclick=(index)=>{
    let arr= [...less]
    arr[index].completed=!arr[index].completed
    //console.log(arr);
    setLess(arr)
    //console.log(Data);
    console.log(index);
  }
  return (
    <div>
      {
        less.map((d, index) => {
          return (
            <div key={index}><span className={d.completed?'completed':''}>{d.name}</span><input type="button" value="completed"onClick={()=>handleclick(index)} /></div>
          )
        })
      }
    </div>
  )
}
