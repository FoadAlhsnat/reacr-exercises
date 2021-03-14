import '../Button/btnCss.css'
const Btn=(props)=>{
  return <button className={props.styleClass}>
    {
      props.content
    }
  </button>
}

export default Btn