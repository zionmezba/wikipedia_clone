import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

    const [todos, setTodos] = useState([]);
    const [inputValue, setInputvalue] = useState("");

    const handleChange = (event) => {
        setInputvalue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim()) {
            setTodos([...todos, inputValue ]);
            setInputvalue("");
        }
    };

    return (
        <div>
            <div>
                <h1>
                    {count}
                </h1>
                <button
                    onClick={() => 
                    setCount(count + 1)}>
                    Increment++
                </button>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    placeholder="todo" 
                    onChange={handleChange}
                    value={inputValue} />

                    <button type='submit'>
                        Add Todo
                    </button>
                </form>

                <ul>
                    {
                        todos.map((todo) => (
                            <li key={Math.random()}>{todo}</li>
                        ))
                    }
                </ul>
            </div>
        </div>

    )
}
export default Counter;