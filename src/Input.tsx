import React, {memo } from 'react'
import Select from 'react-select';
import TextField from '@atlaskit/textfield';
import CrossCircleIcon from '@atlaskit/icon/glyph/cross-circle';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'vanilla1', label: 'Vanilla' },
    { value: 'vanilla2', label: 'Vanilla' },
    { value: 'vanilla3', label: 'Vanilla' },
    { value: 'vanilla4', label: 'Vanilla' },
    { value: 'vanilla5', label: 'Vanilla' },
    { value: 'vanilla6', label: 'Vanilla' },
];

export function Input({ value, setValue } : {value: string | undefined, setValue: (e: any) => void }) {
    const v = { value, label: value }
    console.log('render');

    const onChange = (value: any) => {
        setValue(value.target.value)
    }
    return (
        <>
            <input onChange={onChange}/>
            <TextField  onChange={onChange} />
            <CrossCircleIcon label="meh"/>
            <Select
                value={v}
                onChange={onChange}
                options={options}
            />
        </>
    )
}

// export default memo(Input)
