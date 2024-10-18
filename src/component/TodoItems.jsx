import React from 'react'
import styles from "./todoItem.module.css"

function TodoItems({ item }) {
    return (
        <div className={styles.item}>
            <div className={styles.itemName}>
                {item}
            </div>
            <hr className={styles.line} />
        </div>
    )
}

export default TodoItems
