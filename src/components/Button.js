const Button = ({name}) => {
  return (
    <button className="btn" style={{width: "120px", alignSelf: "center", textTransform: "uppercase", fontWeight: "bold"}}>
      {name}
    </button>

  )
} 

export default Button