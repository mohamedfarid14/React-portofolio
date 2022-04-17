import Actions from '../components/CounterActions'
import Counter from '../components/Counter'
import { useState } from 'react'

const Container = ()=>{
    const [counter, setCounter] = useState(0)

    const increase = ()=>{
        setCounter(counter+1);
    }
    const decrease = ()=>{
        setCounter(counter-1);
    }

    return (
        <div className='container d-flex flex-column align-items-center mt-5'>
            <div className='mb-4 fs-1 fw-bolder'>
                <Counter counter={counter}/>
            </div>
            <div>
                <Actions increase={increase} decrease={decrease}/>

            </div>
        </div>
    )
}

export default Container