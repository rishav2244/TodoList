import { useEffect, useState } from "react";
import { getTasks } from "../api/api";
import { TaskItem } from "../components/TaskItem";
import { useNavigate } from "react-router-dom";

export const TaskList = () => {
  const [myInfo, setMyInfo] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const placeHolder = async () => {
      try {
        const temp = await getTasks();
        setMyInfo(temp);
      } catch (error) {
        console.log(error);
      }
    };
    placeHolder();
  }, []);

  const filteredTasks = myInfo
    ? myInfo.filter((task) => task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const allCompleted = filteredTasks.length > 0 && filteredTasks.every((task) => task.status === "COMPLETED");

  return (
    <div>
      {myInfo !== null && myInfo.length > 0 && (
        <input
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      )}

      {myInfo === null ? (
        <p>Loading</p>
      ) : myInfo.length === 0 ? (
        <p>No tasks available today.</p>
      ) : (
        filteredTasks
          .sort((a, b) => a.id - b.id)
          .map((reqInfo) => (
            <TaskItem
              TaskObj={reqInfo}
              key={reqInfo.id}
              onclick={() => {
                navigate(`${reqInfo.id}`);
              }}
            />
          ))
      )}

      <button onClick={() => navigate(`add-task`)}>Create task</button>

      {allCompleted ? <p>🎉 All tasks completed!</p> : <></>}
    </div>
  );
};
