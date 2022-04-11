

function CounterActions(props){
    return (
        <div >
            <div >
                <button onClick={props.inc}>Increment</button>
                <button  onClick={props.dec}>Decrement</button>
            </div>
        </div>
    );
}

export default CounterActions;