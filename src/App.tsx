import React from 'react'
import {StateApp} from "./StateApp";
import {ReduxApp} from "./ReduxApp";

const redux = false

export default function () {
    if (redux) {
        return <ReduxApp />
    }
    return <StateApp/>
}
