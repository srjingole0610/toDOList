import React from 'react'
import TodoItems from "./TodoItems";
import styles from "./todolist.module.css"

function TodoList({ todoItem, setTodoItem }) {
    const todoListStyle = {
        maxHeight: 'calc(100vh - 25rem)',
        overflowY: todoItem.length > 8 ? 'scroll' : 'unset'
    }
    const sortedTodoItem = todoItem.slice().sort((a, b) => Number(a.todoDone) - Number(b.todoDone))
    return (
        <div className={styles.todoList} style={todoListStyle}>
            {
                sortedTodoItem.map((item, index) => (
                    <TodoItems key={index} item={item} todoItem={todoItem} setTodoItem={setTodoItem} />
                ))
            }
        </div>
    )
}

export default TodoList

