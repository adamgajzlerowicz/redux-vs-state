import React from 'react'

export function Input({ value: { value }, setValue }: { value: { value: string }, setValue: (e: any) => void}) {
    console.log('render');
    return (
        <input type={value} onChange={setValue}/>
    )
}

