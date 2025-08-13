import Headline from "../atoms/Headline.jsx";
import Switch from "../atoms/Switch.jsx";

const TaskList = () => {
    return (
        <>
            <ul className="task-list">
                <li tabIndex="0" className="task-item">
                    <div className='task-header'>
                        <Headline level={3} value="Task Name"/>
                        <Switch />
                    </div>
                    <p>Due date: {new Date().toLocaleDateString('et')}</p>
                    <p>Priority: High</p>
                    <p> Category: Personal</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ex minima quam quibusdam saepe voluptates!</p>
                </li>
                <li className="task-item">test item 2</li>
            </ul>
        </>
    );
}
export default TaskList;