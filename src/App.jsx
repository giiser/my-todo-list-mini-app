const App = () => {
    return (
        <>
            <header className="header">
                This is the App Header
            </header>
            <main className="container">
                {/*Form to create tasks*/}
                <form className="inputForm">
                    <div className="formField">
                        <label htmlFor="taskName" aria-label="Task Name">Task Name: </label>
                        <input type="text" id="taskName" placeholder="Task Name" />
                    </div>
                    <div className="formField">
                        <label htmlFor="taskPriority" aria-label="Priority">Priority: </label>
                        <select id="taskPriority">
                            <option value="Urgent">‼️ Urgent</option>
                            <option value="High">❗️️ High</option>
                            <option value="Medium">⚠️ Medium</option>
                            <option value="Low">❇️ Low</option>
                        </select>
                    </div>
                    <div className="formField">
                        <label htmlFor="taskCategory" aria-label="Task Category">Category: </label>
                        <select id="taskCategory">
                            <option value="Personal">Personal</option>
                            <option value="Work">Work</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="formField">
                        <label htmlFor="taskDescription" aria-label="Task description">Task Description: </label>
                        <textarea id="taskDescription" placeholder="Task Description" />
                    </div>
                    <div className="formField">
                        <button>Add Task</button>
                    </div>
                </form>
                <section className="container">
                    <ul className="taskList">
                        <li className="taskItem">test item</li>
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