import './App.css';
import AceEditor from "react-ace"
import "ace-builds/src-noconflict/mode-html"
import "ace-builds/src-noconflict/theme-xcode"
import Validator from "./Validator";
import {useState} from "react";
import {HTMLHint} from "htmlhint";

// const w3cjs = require("w3cjs")

function App() {
  const [code, setCode] = useState('')
  const [HTMLHintErrors, setHTMLHintErrors] = useState(HTMLHint.verify(code, HTMLHint.rules))
  // const [W3CJSErrors, setW3CJSErrors] = useState(w3cjs.validate({
  //   input: code,
  //   output: 'json',
  //   callback: function (err, res) {
  //     console.log(res)
  //     // setW3CJSErrors(res.messages)
  //   }
  // }))

  function onChange(newValue) {
    setCode(newValue)
    setHTMLHintErrors(HTMLHint.verify(newValue, HTMLHint.rules))
    // w3cjs.validate({
    //   input: newValue,
    //   output: 'json',
    //   callback: function (err, res) {
    //     console.log(res.messages)
    //     // setW3CJSErrors(res.messages)
    //   }
    // })
  }

  return (
    <div className="App">
      <AceEditor
        mode={"html"}
        theme={"xcode"}
        debounceChangePeriod={300}
        onChange={onChange}
        name={"editor"}
        defaultValue={code}
      />
      <div className={"validators"}>
        <Validator name={"HTMLHint"} code={code} key={code} errors={HTMLHintErrors}/>
        <Validator name={"W3C (Nu)"}/>
        <Validator name={"HTML-validate"}/>
        <Validator name={"htmllint"}/>
      </div>
    </div>
  );
}

export default App;
