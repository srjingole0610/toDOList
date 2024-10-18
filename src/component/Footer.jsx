import React from 'react'
import styles from './footer.module.css'

function Footer({ completedTodo, totalTodoItem }) {
    return (
        <div className={styles.footer}>
            <span className={styles.completedItem}>The completed todo: {completedTodo}</span>
            <span className={styles.completedItem}>The total todo Items: {totalTodoItem}</span>
        </div>
    )
}

export default Footer
