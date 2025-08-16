import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  increaseByValue,
} from "./slices/counterSlice";

function App() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <h1 className="text-4xl font-bold mb-8">Redux Counter</h1>

      <div className="bg-white text-gray-800 shadow-lg rounded-2xl p-10 flex flex-col items-center space-y-6">
        <p className="text-5xl font-extrabold">{count}</p>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => dispatch(increment())}
            className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition"
          >
            +
          </button>

          <button
            onClick={() => dispatch(decrement())}
            className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition"
          >
            -
          </button>

          <button
            onClick={() => dispatch(reset())}
            className="col-span-2 px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg shadow-md transition"
          >
            Reset
          </button>

          <button
            onClick={() => dispatch(increaseByValue(5))}
            className="col-span-2 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition"
          >
            Increase by 5
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
