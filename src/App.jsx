const App = () => {
    return (
        <>
            <header className="header">
                <h1>✅ Simple ToDo App</h1>
            </header>
            <main>
                <section className="container">
                    <button className="btn btn-primary">
                        Add New Task
                    </button>
                </section>
                {/*Form to create tasks*/}
                <form className="container form-container">
                    <h2>Add New Task</h2>
                    <div className="form-field">
                        <label htmlFor="task-name" aria-label="Task Name">Task Name: </label>
                        <input type="text" id="task-name" placeholder="Task Name" />
                    </div>
                    <div className="form-field">
                        <label htmlFor="due-date" aria-label="Due Date">Due Date: </label>
                        <input type="date" id="due-date"  />
                    </div>
                    <div className="form-field">
                        <label htmlFor="task-priority" aria-label="Priority">Priority: </label>
                        <select id="task-priority">
                            <option value="Urgent">‼️ Urgent</option>
                            <option value="High">❗️️ High</option>
                            <option value="Medium">⚠️ Medium</option>
                            <option value="Low">❇️ Low</option>
                        </select>
                    </div>
                    <div className="form-field">
                        <label htmlFor="task-category" aria-label="Task Category">Category: </label>
                        <select id="task-category">
                            <option value="Personal">Personal</option>
                            <option value="Work">Work</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="form-field">
                        <label htmlFor="task-description" aria-label="Task description">Task Description: </label>
                        <textarea id="task-description" placeholder="Task Description" />
                    </div>
                    <div className="form-field">
                        <button className='btn btn-submit'>Add Task</button>
                        <button className='btn btn-cancel'>Cancel</button>
                    </div>
                </form>
                <section className="container">
                    <ul className="task-list">
                        <li tabIndex="0" className="task-item">
                            <div className='task-header'>
                                <h3>Task name</h3>
                                <label className="switch">
                                    <input  className="switch" type="checkbox"/>
                                    <span tabIndex="0" className="slider round"></span>
                                </label>
                            </div>
                            <p>Due date {new Date().toLocaleDateString('et')}</p>
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