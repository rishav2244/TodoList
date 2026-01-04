import { useState } from "react"
import styles from "../styles/TaskAdd.module.css"
import { createTask } from "../api/api";
import { useNavigate } from "react-router-dom";

export const TaskAdd = () => {
    const [nameContent, setNameContent] = useState("");
    const [descContent, setDescContent] = useState("");
    const buttonEnbl = nameContent.trim().length > 0;
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const postableJSON = {
            title: nameContent.trim(),
            description: descContent.trim(),
        }
        try {
            const resp = await createTask(postableJSON);
            setDescContent("");
            setNameContent("");
        }
        catch (err) {
            console.log("Error: " + err.response?.data)
            console.log("Nah bro this shouldn't have errored I'm giving up.")
        }
    }

    return (
        <div>
            <form
                className="OverallForm"
                onSubmit={handleSubmit}>
                <div
                    className="FormOptions">
                    <label
                        htmlFor="TaskName">Task name: </label>
                    <input
                        type="text"
                        name="TaskName"
                        placeholder="Task name"
                        value={nameContent}
                        onChange={(e) => {
                            setNameContent(e.target.value)
                        }} />
                </div>
                <div
                    className="FormOptions">
                    <label
                        htmlFor="TaskDesc">Description: </label>
                    <input
                        type="text"
                        name="TaskDesc"
                        placeholder="Task description"
                        value={descContent}
                        onChange={(e) => {
                            setDescContent(e.target.value)
                        }} />
                </div>
                <button
                    disabled={!buttonEnbl}>Submit</button>
            </form>
            <button
            onClick={ () => navigate("/dashboard/tasks")}>
                Returnt to dashboard
            </button>
        </div>
    )
}
