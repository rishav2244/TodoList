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
                <h6>Tasks</h6>
            </div>
            <div
            onClick={toProfile}>
                <h6>Profile</h6>
            </div>
        </div>
    )
}