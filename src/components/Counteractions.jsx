const Actions = (props)=>{
    return (
        <div>
            <button className='btn btn-success m-1' onClick={props.increase}>Increase</button>
            <button className='btn btn-danger m-1' onClick={props.decrease}>Decrease</button>
        </div>
    )
}

export default Actions