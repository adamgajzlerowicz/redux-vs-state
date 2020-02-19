import React, {useState} from 'react'
import {StateApp} from "./StateApp";
import {ReduxApp} from "./ReduxApp";

export default function () {
    const [reduxApp, setReduxApp] = useState(false)

    return <>
        Redux App ({String(reduxApp)}): <input
            type="checkbox"
            name="check"
            checked={reduxApp}
            onChange={(e) => {
                setReduxApp(e.target.checked)
            }}
        />
        <br />

        {!reduxApp && <StateApp/>}
        {reduxApp && <ReduxApp/>}
    </>
}
