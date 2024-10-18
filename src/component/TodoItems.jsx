import React from "react";
import styles from "./todoItem.module.css";

function TodoItems({ item, todoItem, setTodoItem }) {
    const handleDeleteItem = (item) => {
        console.log("delete button clicked for ", item);
        setTodoItem(todoItem.filter((todo) => todo !== item))
    }
    return (
        <div className={styles.item}>
            <div className={styles.itemName}>
                {item}
                <span>
                    <button onClick={() => handleDeleteItem(item)} className={styles.deleteButton}>x</button>
                </span>
            </div>
            <hr className={styles.line} />
        </div>
    );
}

export default TodoItems;
