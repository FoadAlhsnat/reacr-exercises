import '../Button/btnCss.css'
const Btn=(props)=>{
 const handelclick=()=>{
    props.newjoke()
  }
  return <button onClick={handelclick}>
    Click me
  </button>
}

export default Btn