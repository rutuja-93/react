import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./slices/counter1Slice";
import { increment as increment2, decrement as decrement2 } from "./slices/counter2Slice";

function App() {
  const counter1 = useSelector((state) => state.counter1SliceReducer.value);
  const counter2 = useSelector((state) => state.counter2SliceReducer.value);

  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter 1 is {counter1}</h1>
      <button onClick={() => dispatch(increment())}>Increase Counter 1</button>
      <button onClick={() => dispatch(decrement())}>Decrease Counter 1</button>

      <h1>Counter 2 is {counter2}</h1>
      <button onClick={() => dispatch(increment2())}>Increase Counter 2</button>
      <button onClick={() => dispatch(decrement2())}>Decrease Counter 2</button>
    </>
  )
}

export default App;
