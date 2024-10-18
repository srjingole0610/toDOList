import React, { useState } from 'react'
import styles from './form.module.css'

function Form({ todoItem, setTodoItem }) {
    const [todo, setTodo] = useState({ todoName: "", todoDone: false });

    const handleSubmitForm = (e) => {
        e.preventDefault();
        setTodoItem([...todoItem, todo]);
        setTodo({ todoName: "", todoDone: false });
    };
    const addTodoItem = (e) => {
        setTodo({ todoName: e.target.value, todoDone: false });
    };
    return (
        <form className={styles.todoForm} onSubmit={handleSubmitForm}>
            <div className={styles.form_container}>
                <input className={styles.mordernInput} onChange={addTodoItem} type="text" value={todo.todoName} placeholder='Enter the todo item...' />
                <button className={styles.mordernButton} type="submit">Add</button>
            </div>
        </form>
    )
}

export default Form
