import "./Validator.css"

function Validator(props) {
  return (
    <div className={"validator"}>
      <h3>{props.name} [{props.errors ? props.errors.length : 0} errors]</h3>
      <div className={"errors"}>
        {
          props.errors ?
            props.errors.map(error => {
              return <div className={"error_div"}>
                {
                  Object.entries(error).map(key => {
                    if (typeof key[1] === "object") {
                      return <div><b>{`${key[0]}:`}</b> {` ${JSON.stringify(key[1])}`}</div>
                    } else {
                      return <div><b>{`${key[0]}:`}</b> {` ${key[1]}`}</div>
                    }
                  })
                }
              </div>
            })
            :
            ''
        }
      </div>
    </div>
  )
}

export default Validator