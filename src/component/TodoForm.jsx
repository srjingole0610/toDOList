import React, { useState } from 'react'

function TodoForm() {
    const [todo, setTodo] = useState("")
    const addTodoItem = (e) => {
        setTodo(e.target.value)
    }
    return (
        <div>
            <form>
                <input onChange={addTodoItem} type="text" value={todo} />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default TodoForm
