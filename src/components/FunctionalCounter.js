import { useState } from "react";

function FunctionalCounter() {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1)
    }

    return <div>
        <div>Counter value: {counter}</div>
        <button onClick={increment}>Increment</button>
    </div>;
}

export default FunctionalCounter;