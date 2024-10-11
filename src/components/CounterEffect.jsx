import { useEffect, useState } from "react";

const CounterEffect = () => {
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            if (data && data.length) setTodo(data);
        }
        fetchData();
    }, [todo]);

    return (
        <div>
            <h1>Todo List</h1>
            {
                todo.slice(0, 1).map((todo) => (
                    <div key={todo.id}>
                        <h1>{todo.title}</h1>
                        <p>{todo.body}</p>
                    </div>
                ))
            }

        </div>
    )
}

export default CounterEffect;