import styles from "../styles/TaskItem.module.css"

export const LogItem = ({ LogObj, onclick }) => {

    const formattedDate = new Date(LogObj.timestamp).toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });

    return (
        <div
            className={styles.TaskItem}
            onClick={onclick}>
            <p>
                {LogObj.id}
            </p>
            <p>
                {LogObj.action}
            </p>
            <p>
                {LogObj.description}
            </p>
            <p>
                {LogObj.taskId}
            </p>
            <p>
                {formattedDate}
            </p>
        </div>
    )
}
