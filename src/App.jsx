import Button from "./atoms/Button.jsx";
import Headline from "./atoms/Headline.jsx";
import Switch from "./atoms/Switch.jsx";
import FormContainer from "./components/FormContainer.jsx";
import TaskList from "./components/TaskList.jsx";

const App = () => {
    const priorities = [
            {value: 'Medium', label: ' 🟡 Medium'},
            {value: 'Low', label: '🟢 Low'},
            {value: 'High', label: '🔴 High'},
            {value: 'Urgent', label: '‼️ Urgent'}
    ]
    const categories = [
        {value: 'Work', label: 'Work'},
        {value: 'Personal', label: 'Personal'},
        {value: 'Other', label: 'Other'},
    ]
    return (
        <>
            <header className="header">
                <Headline level={1} value="✅ Task List App" />
                {/*<h1>✅ Task List App</h1>*/}
            </header>
            <main>
                <section className="container">
                    <Button classes={'btn btn-primary'} buttonLabel={'Add New Task'}/>
                    <FormContainer priorities={priorities} categories={categories} />
                </section>
                <section className="container">
                    <TaskList />
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
                </section>
            </main>
            <footer className="footer">
                2025 ToDo app. No rights reserved 😅
            </footer>
        </>
    );
}

export default App;