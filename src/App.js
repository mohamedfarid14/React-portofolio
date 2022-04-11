import Count from './Counter.js'
function App() {
  const value = 0 ; 
  return (
    <div className='container text-center' >
    <h1>Counter</h1>
    <Count value={value}/>
    </div>
  );
}

export default App;