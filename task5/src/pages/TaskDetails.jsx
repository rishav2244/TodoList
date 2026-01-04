import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getTaskHeavy, updateStatus, deleteStatus } from "../api/api";
import styles from "../styles/TaskDetails.module.css"

export const TaskDetails = () => {
    const { id } = useParams();//Fetches id from link
    const [TaskObj, setTaskObj] = useState(null);
    const [TaskStatus, setTaskStatus] = useState("PENDING");
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);

    useEffect(() => {
        const datCall = async () => {
            try {
                const heavyDetailsJSON = await getTaskHeavy({ id });
                setTaskObj(heavyDetailsJSON);
                setTaskStatus(heavyDetailsJSON?.status)
            }
            catch (err) {
                console.log("Error: " + err)
            }
            finally {
                setIsLoading(false)
            }
        };

        datCall();
    }, [id]);

    const markAsCompleted = async () => {
        const statusJSON = {
            status: "COMPLETED"
        }
        try{
            const resp = await updateStatus(id,statusJSON)
            setTaskStatus(resp.status);
        }
        catch(err)
        {
            console.log(`Error: ${err}`)
        }
    }

    const toConfirm = () => {
        setConfirmDelete(true);
        setTimeout(() => {
            if(!isDeleted)
            {
                setConfirmDelete(false);
            }
        }, 3000);
    }

    const deleteTask = async () => {
        try{
            const resp = await deleteStatus(id)
            setIsDeleted(true);
            setTimeout(() => {
                navigate(`/dashboard/tasks`);
            }, 3000);
        }
        catch(err)
        {
            console.log(`Error: ${err}`)
        }
    }

    // const date = new Date(TaskObj.createdAt);
    // const formattedDate = `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1).toString().padStart(2, "0")
    //     }/${date.getFullYear()}`;

    if (isLoading) return <p>Loading task details...</p>;
    if (!TaskObj) return <p>Task not found.</p>;
    if (isDeleted)
    {
        return (
            <p>
                Task deleted successfully 🚀
            </p>
        )
    }

    return (
        <div
            className={styles.OverallDetails}>
            <h1>
                {TaskObj.title}
            </h1>
            <h3>
                {TaskObj.description}
            </h3>
            <h3>
                Created at: {TaskObj.createdAt}
            </h3>
            <div
                className={styles.EachAttribute}>
                <h3
                    className={styles.TaskStatus}
                    style={{
                        backgroundColor: TaskStatus === "COMPLETED" ? "green" : "red",
                    }}>
                    {TaskStatus}
                </h3>
                {TaskStatus === "PENDING" &&(
                    <button
                        type="button"
                        onClick={markAsCompleted}>
                        Mark as done
                    </button>
                )}
            </div>
            <button
            type="button"
            onClick={
                !confirmDelete ? toConfirm : deleteTask
            }>
                {
                    confirmDelete ? "Confirm delete" : "Delete task"
                }
            </button>
            <button
                onClick={() => {
                    navigate(`/dashboard/tasks`)
                }}>Return to dashboard</button>
        </div>
    )
}