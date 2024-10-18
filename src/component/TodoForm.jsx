import React, { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";


function TodoForm() {
    const [todoItem, setTodoItem] = useState([]);
    const completedTodo = todoItem.filter((todo) => todo.todoDone).length;
    const totalTodoItem = todoItem.length
    return (
        <div>
            <Form todoItem={todoItem} setTodoItem={setTodoItem} />
            <TodoList todoItem={todoItem} setTodoItem={setTodoItem} />
            <Footer completedTodo={completedTodo} totalTodoItem={totalTodoItem} />
        </div>
    );
}

export default TodoForm;
