import { useEffect, useState } from 'react'

function Sub({ init, setConditionA, setConditionB }) {
    const reset = () => {
        console.log('(reset)')
        setConditionA(false)
        // setConditionB(false)
        init()
    }

    return (
        <>
            <h3>SUB:::</h3>
            <button onClick={reset}>reset</button>
        </>
    )
}

export default Sub
