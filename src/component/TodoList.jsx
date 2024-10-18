import React from 'react'
import TodoItems from "./TodoItems";
import styles from "./todolist.module.css"

function TodoList({ todoItem }) {
    return (
        <div className={styles.todoList}>
            {
                todoItem.map((item, index) => (
                    <TodoItems key={index} item={item} />
                ))
            }
        </div>
    )
}

export default TodoList
