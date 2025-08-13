import Headline from "../atoms/Headline.jsx";
import FormInput from "../atoms/FormInput.jsx";
import FormSelectList from "../atoms/FormSelectList.jsx";
import TextArea from "../atoms/TextArea.jsx";
import Button from "../atoms/Button.jsx";

const FormContainer = ({priorities, categories}) => {
    return (
        <>
            {/*Form to create tasks*/}
            <form className="container form-container">
                <Headline level={2} value="New Task" />
                <FormInput id={"task-name"} type={"text"} label={'Task Name'}/>
                <FormInput id={"due-date"} type={"date"} label={'Due Date'}/>
                <FormSelectList id={"task-priority"} label={'Task Priority'} options={priorities} />
                <FormSelectList id={"task-category"} label={'Task Category'} options={categories} />
                <TextArea id={"task-description"} label={'Task Description'}/>
                <div className="form-field">
                    <Button classes="btn btn-submit" buttonLabel={"Add Task"}/>
                    <Button classes="btn btn-cancel" buttonLabel={"Cancel"}/>
                </div>
            </form>
        </>
    )
}
export default FormContainer;