import './App.css';
import AceEditor from "react-ace"
import "ace-builds/src-noconflict/mode-html"
import "ace-builds/src-noconflict/theme-xcode"
import Validator from "./Validator";
import {useState} from "react";
import {HTMLHint} from "htmlhint";

function App() {
  const [code, setCode] = useState('')
  const [HTMLHintErrors, setHTMLHintErrors] = useState(HTMLHint.verify(code, HTMLHint.rules))

  function onChange(newValue) {
    setCode(newValue)
    setHTMLHintErrors(HTMLHint.verify(newValue, HTMLHint.rules))
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
