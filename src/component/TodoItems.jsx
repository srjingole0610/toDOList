import React from "react";
import styles from "./todoItem.module.css";

function TodoItems({ item, todoItem, setTodoItem }) {
    const handleDeleteItem = (item) => {
        console.log("delete button clicked for ", item);
        setTodoItem(todoItem.filter((todo) => todo !== item));
    };

    const handleItemComplete = (name) => {
        // console.log("The item clicked is ", item)
        const newTodoItems = todoItem.map((todo) => todo.todoName === name ? { ...todo, todoDone: !todo.todoDone } : todo);
        setTodoItem(newTodoItems)
        console.log(todoItem)
    }
    const strikeThrough = item.todoDone ? styles.completed : ""
    return (
        <div className={styles.item}>
            <div className={styles.itemName}>
                <span className={strikeThrough} onClick={() => handleItemComplete(item.todoName)}>{item.todoName}</span>
                <span>
                    <button
                        onClick={() => handleDeleteItem(item)}
                        className={styles.deleteButton}
                    >
                        x
                    </button>
                </span>
            </div>
            <hr className={styles.line} />
        </div>
    );
}

export default TodoItems;
