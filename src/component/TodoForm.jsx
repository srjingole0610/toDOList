import React, { useState } from 'react'

/**
 * TodoForm is a React functional component that renders a form for adding todo items.
 * It maintains the current input value and the list of todo items using React state.
 * 
 * The form consists of a text input and a submit button. Users can enter a todo item
 * into the input field, which updates the component's state. Upon submission of the form,
 * the current input value is added to the list of todo items and the input field is cleared.
 *
 * State:
 * - todo: a string representing the current input value
 * - todoItem: an array of strings representing the list of added todo items
 *
 * Event Handlers:
 * - addTodoItem: updates the input value state when the input field changes
 * - handleSubmitForm: prevents the default form submission, adds the current input value
 *   to the list of todo items, and clears the input field
 */
function TodoForm() {
    const [todo, setTodo] = useState("")
    const [todoItem, setTodoItem] = useState([])
    /*************  ✨ Codeium Command ⭐  *************/
    /**
     * addTodoItem is an event handler that updates the input value state
     * when the input field changes.
     * @param {object} e - the event object, containing the target value
     */
    /******  8dc9d9ee-87bf-470b-9fa9-2cc8bb82765c  *******/
    const addTodoItem = (e) => {
        setTodo(e.target.value)
    }
    /*************  ✨ Codeium Command ⭐  *************/
    /**
     * handleSubmitForm is an event handler that prevents the default form
     * submission. It adds the current input value to the list of todo items,
     * and clears the input field.
     * @param {object} e - the event object
     */
    /******  c9093288-1b3c-4e00-9854-6f8838889ecd  *******/
    const handleSubmitForm = (e) => {
        e.preventDefault();
        setTodoItem([...todoItem, todo]);
        setTodo("")
    }
    return (
        <div>
            <form onSubmit={handleSubmitForm}>
                <input onChange={addTodoItem} type="text" value={todo} />
                <button type="submit">Add</button>
            </form>
            {console.log(todoItem)}
        </div>
    )
}

export default TodoForm
