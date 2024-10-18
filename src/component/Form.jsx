import React, { useState } from 'react'

function Form({ todoItem, setTodoItem }) {
    const [todo, setTodo] = useState("");

    const handleSubmitForm = (e) => {
        e.preventDefault();
        setTodoItem([...todoItem, todo]);
        setTodo("");
    };
    const addTodoItem = (e) => {
        setTodo(e.target.value);
    };
    return (
        <form onSubmit={handleSubmitForm}>
            <input onChange={addTodoItem} type="text" value={todo} />
            <button type="submit">Add</button>
        </form>
    )
}

export default Form
