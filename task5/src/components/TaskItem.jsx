import styles from "../styles/TaskItem.module.css"

export const TaskItem = ({TaskObj,onclick}) => {
  return (
    <div 
    className={styles.TaskItem}
    onClick={onclick}>
        <p>
            {TaskObj.id}
        </p>
        <p>
            {TaskObj.title}
        </p>
        <p
        className={styles.TaskStatus}
        style={{
            backgroundColor: TaskObj.status === "COMPLETED" ? "green" : "red",
        }}>
            {TaskObj.status}
        </p>
    </div>
  )
}
