import Button from "./atoms/Button.jsx";
import Headline from "./atoms/Headline.jsx";
import FormContainer from "./components/FormContainer.jsx";
import TaskList from "./components/TaskList.jsx";
import {useEffect, useState} from "react";

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

    // states
    const [tasks, setTasks] = useState(()=>{
        return  JSON.parse(localStorage.getItem("tasks")) || [];
    });

    const [isFormVisible, setIsFormVisible] = useState(false);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const deleteTask = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this task?");
        if (confirmDelete) {
            setTasks(tasks.filter(task => task.id !== id));
        }
    }

    const setComplete = (id) => {
        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    // Create a new object for the updated task
                    return { ...task, isComplete: !task.isComplete };
                }
                // Return the original task if it's not the one we're updating
                return task;
            })
        );
    };

    const primaryButtonClick = () => {
        setIsFormVisible(!isFormVisible);
    }



    return (
        <>
            <header className="header">
                <Headline level={1} value="✅ Task List App" />
                {/*<h1>✅ Task List App</h1>*/}
            </header>
            <main>
                <section className="container">
                    <Button
                        classes={!isFormVisible?'btn btn-primary':'btn btn-cancel-form'}
                        buttonLabel={!isFormVisible?'Add New Task':'Hide Form'}
                        onClick={primaryButtonClick}
                    />
                    <FormContainer priorities={priorities} categories={categories} tasks={tasks} setTasks={setTasks} isFormVisible={isFormVisible} setFormVisible={setIsFormVisible} />
                </section>
                <section className="container">
                    <TaskList tasks={tasks} deleteTask={deleteTask} setComplete={setComplete} />
                </section>
            </main>
            <footer className="footer">
                2025 ToDo app. No rights reserved 😅
            </footer>
        </>
    );
}

export default App;