const Button = ({name, link}) => {
  return (
    <button className="btn" style={{width: "120px", alignSelf: "center", textTransform: "uppercase", fontWeight: "bold"}}>
      <a href={link}>{name}</a>
    </button>

  )
} 

export default Button