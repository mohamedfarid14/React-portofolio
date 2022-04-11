import { useState } from 'react';
import Counter from './Counter'
import CounterActions from "./Counteractions";


function CounterContainer(){

    let  [counter, setCounter] = useState(0);

    const inc = ()=>{
        setCounter(counter++);
    }

    const dec = ()=>{
        setCounter(counter--);
    }

    return(
      <div>
          <Counter counter={counter}/>
          <CounterActions inc={inc} dec={dec}/>
      </div>
    );
}

export default CounterContainer;