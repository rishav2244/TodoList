import { useContext } from "react"
import { PageContext } from "../context/PageContext"

export const Sidebar = () => {

    const { setActiveSection } = useContext(PageContext);

    const toTasks = () => {
        setActiveSection("tasks")
    }

    const toProfile = () => {
        setActiveSection("profile")
    }

    return (
        <div
            className="OverallBar">
            <div
            onClick={toTasks}>
                <h4>Tasks</h4>
            </div>
            <div
            onClick={toProfile}>
                <h4>Profile</h4>
            </div>
        </div>
    )
}