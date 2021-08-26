import React, {useState} from "react";
import TaskSingle from "./TaskSingle";

export default function TaskList() {
  const [tasks, setTasks] = useState([
        {
          id: 1,
          title: "Complete map() of Javascript",
          status: "done",
        },
        {
          id: 2,
          title: "Display list in view",
          status: "pending",
        },
        {
          id: 3,
          title: "final list in turan",
          status: "pending",
        },
      ]
  )

  const changeTaskStatus = (index) => {
      const updatedTasks = []
        tasks.map((task, idx) => {
            if(index === idx){
                task.status = task.status==='pending'? 'done':'pending';
            }
            updatedTasks.push(task)
        })
        setTasks(updatedTasks)
  }

  return (
    <>
      <div>
        <h2>Task List</h2>
        {tasks.length === 0 && <h3>no item available</h3>}
        {tasks.length !== 0 && (
          <table border="2">
            <thead>
              <tr>
                <th>Sl</th>
                <th>Title</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <TaskSingle 
                key={index} 
                task={task} 
                index={index}
                changeTaskStatus={changeTaskStatus}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
