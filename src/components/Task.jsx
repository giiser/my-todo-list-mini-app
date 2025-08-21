import Headline from "../atoms/Headline.jsx";
import Button from "../atoms/Button.jsx";
import FormInput from "../atoms/FormInput.jsx";

const Task = ({task, deleteTask, setComplete}) => {
    return (
        <li key={task.id} tabIndex="0" className="task-item">
            <div className='task-header'>
                <Headline level={3} value={task.name}/>
            </div>
            <div className={"task-controls"}>
                <Button classes={!task.isComplete?"btn btn-complete":"btn btn-incomplete"} buttonLabel={!task.isComplete?'✅ Mark complete':'☑️ Mark incomplete'} onClick={()=>setComplete(task.id)} />
                <Button classes={'btn btn-delete'} buttonLabel={'🗑️ Delete'} onClick={()=>deleteTask(task.id)} />
            </div>
            <p><strong>Due date:</strong> {task.dueDate}</p>
            <p><strong>Priority:</strong> {task.priority}</p>
            <p><strong>Category:</strong> {task.category}</p>
            <p><strong>Status:</strong> {task.isComplete?"Done":"Still to do"}</p>
            <p>{task.description}</p>
        </li>
    );
}
export default Task;