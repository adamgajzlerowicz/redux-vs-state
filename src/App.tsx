import React, {useState} from 'react';
import {Input} from "./Input";

const nums = [0, 1];


function App() {
  const [val1, setVal1] = useState({ value: '' })

  return <>
    <Input value={val1} setValue={setVal1}/>
  </>;
}

export default App;
