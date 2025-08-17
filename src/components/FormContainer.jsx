import Headline from "../atoms/Headline.jsx";
import FormInput from "../atoms/FormInput.jsx";
import FormSelectList from "../atoms/FormSelectList.jsx";
import TextArea from "../atoms/TextArea.jsx";
import Button from "../atoms/Button.jsx";
import {useState} from "react";

const FormContainer = ({priorities, categories, tasks, setTasks, isFormVisible }) => {

    // states
    const [formData, setFormData] = useState({
        name: '',
        category: 'Work',
        priority: 'Medium',
        description: '',
        dueDate: new Date().toISOString().split('T')[0],
        isComplete: false
    })

    const handleChange = (e) => {
        if (e.target.name === "dueDate") {
            let formDate = new Date(e.target.value);
            let newDate = formDate.toISOString().split("T")[0];
            setFormData({...formData, [e.target.name]: newDate});
        } else{
            setFormData({...formData, [e.target.name]: e.target.value});
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formData.name || !formData.description) {
            return;
        }

        const newTask = {id: Date.now(), ...formData}

        setTasks([newTask, ...tasks]);

        setFormData({
            name: '',
            category: 'Work',
            priority: 'Medium',
            description: '',
            dueDate: new Date().toISOString().split("T")[0],
            isComplete: false
        });
    }

    return (
        <>
            {/*Form to create tasks*/}
            {isFormVisible && (
                <form onSubmit={handleSubmit} className="container form-container">
                    <Headline level={2} value="New Task" />
                    <FormInput id={"task-name"} name={"name"} type={"text"} label={'Task Name'} onChange={handleChange} value={formData.name} />
                    <FormInput id={"due-date"} name={"dueDate"} type={"date"} label={'Due Date'} onChange={handleChange} value={formData.dueDate} />
                    <FormSelectList id={"task-priority"} name={"priority"} label={'Task Priority'} options={priorities} onChange={handleChange} value={formData.priority} />
                    <FormSelectList id={"task-category"} name={"category"} label={'Task Category'} options={categories} onChange={handleChange} value={formData.category} />
                    <TextArea id={"task-description"} name={"description"} label={'Task Description'} onChange={handleChange} value={formData.description} />
                    <div className="form-field">
                        <Button classes="btn btn-submit" buttonLabel={"Add Task"} onClick={handleSubmit}/>
                        <Button classes="btn btn-cancel" buttonLabel={"Cancel"}/>
                    </div>
                </form>
            )}
        </>
    )
}
export default FormContainer;