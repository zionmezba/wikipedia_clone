import { useReducer, useState } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + 10 }
        case "decrement":
            return { ...state, count: state.count - 5 }
        case "reset":
            return { ...state, count: 0 }
        case "manualAdd":
            return { ...state, count: state.count + parseInt(action.value) }
        case "manualSub":
            return { ...state, count: state.count - parseInt(action.value) }
        default:
            return;
    }
}

const CounterReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const [inputValue, setInputValue] = useState(0);
    return (
        <div>
            <button onClick={() => dispatch({ type: "increment" })}> +10</button>
            <button onClick={() => dispatch({ type: "decrement" })}> -5</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
            <input type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => dispatch({ type: "manualAdd", value: inputValue })}> +{inputValue} increment</button>
            <button onClick={() => dispatch({ type: "manualSub", value: inputValue })}> -{inputValue} Decrement</button>
            <h1>{state.count}</h1>

        </div>
    )
}
export default CounterReducer;