import React ,{useState}from 'react'

export default function Text({number,text}) {
  const [Text,setText]=useState(text)
  const [textless,settextless]=useState(text.split(' ').slice(0,number).join(' '))
  const[ui,setui]=useState(textless)
  const [less,setless]=useState(false)
  const handleclick=()=>{
    
    if(less){
      setui(textless,less)
    }
    else{
      setui(Text)
    }
    setless(!less)
    
    
   // console.log(textless);
  }
  return (
    <div>
      {ui}
      <input type="button" value={less?'showless' : `showmore`} onClick={handleclick}/>
    </div>
  )
}
