import React from 'react'
import TodoItems from "./TodoItems";

function TodoList({ todoItem }) {
    return (
        <div>
            {
                todoItem.map((item, index) => (
                    <TodoItems key={index} item={item} />
                ))
            }
        </div>
    )
}

export default TodoList
