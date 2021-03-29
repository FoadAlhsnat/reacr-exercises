import React ,{useState}from 'react'

export default function Whatisthetime() {
  const [seconds,setSeconds]=useState(null)
  const [minutes,setMinutes]=useState(null)
  const [hour,setHour]=useState(null)
  const handlechande=(e)=>{
    console.log(e.target.name);
    switch (e.target.name) {
      case 'seconds':
        setSeconds(e.target.value)
        setHour(e.target.value/3600)
        setMinutes(e.target.value/60)
        break;
        case 'minutes':
          setMinutes(e.target.value)
          setHour(e.target.value/60)
          setSeconds(e.target.value*60)
          console.log();
          break;
      default:
        setHour(e.target.value)
        setMinutes(e.target.value*60);
        setSeconds(e.target.value*3600);
        break;
    }
  }
  return (
    <div>
      <div>seconds:<input type="number" name={'seconds'}onChange={handlechande} value={seconds}/></div>
      <div>minutes:<input type="number" name={'minutes'}onChange={handlechande} value={minutes}/></div>
      <div>hour:<input type="number" name={'hour'}onChange={handlechande} value={hour}/></div>
    </div>
  )
}
