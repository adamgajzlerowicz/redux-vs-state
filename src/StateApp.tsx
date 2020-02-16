import React, {useState} from 'react';
import { Input } from "./Input";

export function StateApp() {
    const [val1, setVal1] = useState('')
    const [val2, setVal2] = useState('')
    const [val3, setVal3] = useState('')
    const [val4, setVal4] = useState('')
    const [val5, setVal5] = useState('')
    const [val6, setVal6] = useState('')
    const [val7, setVal7] = useState('')
    const [val8, setVal8] = useState('')
    const [val9, setVal9] = useState('')
    const [val10, setVal10] = useState('')
    const [val11, setVal11] = useState('')
    const [val12, setVal12] = useState('')
    const [val13, setVal13] = useState('')
    const [val14, setVal14] = useState('')
    const [val15, setVal15] = useState('')

    return <>
        <Input value={val1} setValue={setVal1}/>
        <Input value={val2} setValue={setVal2}/>
        <Input value={val3} setValue={setVal3}/>
        <Input value={val4} setValue={setVal4}/>
        <Input value={val5} setValue={setVal5}/>
        <Input value={val6} setValue={setVal6}/>
        <Input value={val7} setValue={setVal7}/>
        <Input value={val8} setValue={setVal8}/>
        <Input value={val9} setValue={setVal9}/>
        <Input value={val10} setValue={setVal10}/>
        <Input value={val11} setValue={setVal11}/>
        <Input value={val12} setValue={setVal12}/>
        <Input value={val13} setValue={setVal13}/>
        <Input value={val14} setValue={setVal14}/>
        <Input value={val15} setValue={setVal15}/>
    </>;
}

