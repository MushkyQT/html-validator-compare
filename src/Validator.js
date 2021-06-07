import "./Validator.css"

function Validator(props) {
  return (
    <div className={"validator"}>
      <h3>{props.name}</h3>
      <div className={"errors"}>

      </div>
    </div>
  )
}

export default Validator