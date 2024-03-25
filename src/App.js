import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function App() {

  const count = useSelector(state=>state.count)
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();

  const resetNumber=()=>{
    dispatch({type: "RESET"})
  }

  const increaseNumber=(num)=>{
    dispatch({type: "INCREAMENT", payload:{num}})
  }

  const decreaseNumber=(num)=>{
    dispatch({type: "DECREMENT", payload:{num}})
  }

  return (
    <div className="App">
      <h1>{ count }</h1>
      <p>숫자를 0으로 <button onClick={resetNumber}>초기화</button>합니다.</p>
      <p>
        <span>1씩 숫자가 </span>
        <button onClick={()=>{increaseNumber(1)}}>증가</button>
        <span> / </span>
        <button onClick={()=>{decreaseNumber(1)}}>감소</button>
        <span>합니다.</span>
      </p>
      <p>
        <input type="number" onChange={(event)=>setNumber(event.target.value)}></input>
        <span>만큼 숫자가 </span>
        <button onClick={()=>{increaseNumber(Number(number))}}>증가</button>
        <span> / </span>
        <button onClick={()=>{decreaseNumber(Number(number))}}>감소</button>
        <span>합니다.</span>
      </p>
    </div>
  );
}

export default App;
