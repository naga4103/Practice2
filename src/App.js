import logo from "./logo.svg";
import "./App.css";
import { useState, useRef, useEffect } from "react";

function App() {
  console.log("hiiiiii");
  let ref = useRef(1);
  let ref2 = useRef(null);
  console.log("Ref...", ref);
  console.log("Ref2..", ref2);

  const [count, setCount] = useState(0);

  function handleClick() {
    ref.current = ref.current + 1;
    // alert("You clicked " + ref.current + " times!");
    console.log("Ref Value...", ref.current); //ref.current value is updating on every click.
  }

  // useEffect(() => {
  //   ref.current = 4;
  //   console.log("Refff", ref);
  //   console.log("Ref value...", ref.current);
  // }, []);

  return (
    <div className="flex items-center">
      {/* <p>{`Count: ${count}`}</p> */}
      <p>{ref.current}</p>
      {/* displays initial value of ref--as it is 1,it display 1..does not update on updation of ref.current */}
      {/* <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me!
      </button> */}

      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
