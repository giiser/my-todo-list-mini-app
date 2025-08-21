import Task from "./Task.jsx";

const TaskList = ({tasks, deleteTask, setComplete}) => {
    return (
        <>
            <ul className="task-list">

                {tasks.map((task) => (
                    <Task key={task.id} task={task} deleteTask={deleteTask} setComplete={setComplete} />
                ))}
            </ul>
        </>
    );
}
export default TaskList;