import Task from "./Task.jsx";

const TaskList = ({tasks, deleteTask}) => {
    return (
        <>
            <ul className="task-list">

                {tasks.map((task) => (
                    <Task key={task.id} task={task} deleteTask={deleteTask} />
                ))}
            </ul>
        </>
    );
}
export default TaskList;