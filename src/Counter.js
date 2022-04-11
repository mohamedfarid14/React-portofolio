import { useState } from 'react'

function Count(props) {
   let [counter,setCounter]=useState(props.value)
    const inc = () =>{
        setCounter(++counter); 
    }
    const dec = () =>{
        if(counter>=1){
            setCounter(--counter); 
        }
    }
    return (
        <div>
            <h1>{counter}</h1>
            <button className='btn btn-primary mx-4' onClick={inc}>Increment</button>
            <button className='btn btn-warning' onClick={dec}>Decrement</button>
        </div>
    )
}

export default Count