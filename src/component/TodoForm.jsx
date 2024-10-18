import React, { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";


function TodoForm() {
    const [todoItem, setTodoItem] = useState([]);
    return (
        <div>
            <Form todoItem={todoItem} setTodoItem={setTodoItem} />
            <TodoList todoItem={todoItem} />
        </div>
    );
}

export default TodoForm;
