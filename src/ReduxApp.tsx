import React from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux'
import { Input } from "./Input";
import {createStore} from "redux";

const reducer = (state: any, {type, field, payload}: any) => {
    return {
        ...state,
        [field]: payload
    }
}


const store = createStore(reducer, {})
store.subscribe(() => {
    console.log(store.getState());
})

const WrappedInput = ({index}: { index: number }) => {
    // @ts-ignore
    const value = useSelector((state) => state[index])
    const dispatch = useDispatch()
    const setValue = (value: string) => {
       dispatch({type: 'meh', field: index, payload: value })
    }


    return <Input value={value} setValue={setValue}/>
}

// @ts-ignore
const range = [...Array(16).keys()];

export function ReduxApp() {
    return <Provider store={store}>
        {range.map((i) => {
            return <WrappedInput index={i + 1} key={i}/>
        })}
    </Provider>;
}

