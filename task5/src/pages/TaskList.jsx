import { useEffect, useState } from "react";
import { getTasks } from "../api/api";
import { TaskItem } from "../components/TaskItem";
import { useNavigate } from "react-router-dom";

export const TaskList = () => {

  const [myInfo, setMyInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const placeHolder = async () => {
      try {
        const temp = await getTasks();
        setMyInfo(temp);
      } catch (error) {
        console.log(error)
      }
    }
    placeHolder();
  }, [])

  const allCompleted = myInfo && myInfo.length > 0 && myInfo?.every((task) => task.status === "COMPLETED");

  return (
    <div>
      {myInfo === null ? (
        <p>Loading</p>)
        : myInfo.length === 0 ? (
          <p>No tasks available today.</p>
        )
          :
          myInfo
            .sort((a, b) => a.id - b.id)
            .map((reqInfo, idx) => (
              <TaskItem
                TaskObj={reqInfo}
                key={reqInfo.id}
                onclick={() => {
                  navigate(`${reqInfo.id}`)
                }} />
            ))
      }
      <button
        onClick={() => navigate(`add-task`)}>
        Create task
      </button>
      {allCompleted ? <p>🎉 All tasks completed!</p> : <></>}
    </div>
  );
};