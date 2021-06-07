import './App.css';
import AceEditor from "react-ace"
import "ace-builds/src-noconflict/mode-html"
import "ace-builds/src-noconflict/theme-xcode"
import Validator from "./Validator";
import {useState} from "react";

function App() {
  const [code, setCode] = useState('')

  function onChange(newValue) {
    setCode(newValue)
  }

  return (
    <div className="App">
      <AceEditor
        mode={"html"}
        theme={"xcode"}
        debounceChangePeriod={300}
        onChange={onChange}
        name={"editor"}
        defaultValue={"<!DOCTYPE html><body></body>"}
      />
      <div className={"validators"}>
        <Validator name={"HTMLHint"}/>
        <Validator name={"W3C (Nu)"}/>
        <Validator name={"HTML-validate"}/>
        <Validator name={"htmllint"}/>
      </div>
    </div>
  );
}

export default App;
