import Headline from "../atoms/Headline.jsx";
import Switch from "../atoms/Switch.jsx";
import Button from "../atoms/Button.jsx";

const Task = ({task, deleteTask}) => {
    return (
        <li key={task.id} tabIndex="0" className="task-item">
            <div className='task-header'>
                <Headline level={3} value={task.name}/>
                <Switch />
            </div>
            <p><strong>Due date:</strong> {task.dueDate}</p>
            <p><strong>Priority:</strong> {task.priority}</p>
            <p><strong>Category:</strong> {task.category}</p>
            <p>{task.description}</p>
            <Button classes={'btn btn-cancel'} buttonLabel={'Delete Task'} onClick={()=>deleteTask(task.id)} />
        </li>
    );
}
export default Task;