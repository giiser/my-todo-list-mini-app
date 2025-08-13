const FormInput = ({id, type, label}) => {
    return (
        <div className="form-field">
            <label htmlFor={id} aria-label={label}>{label} </label>
            <input type={type} id={id} placeholder={label} />
        </div>
    );
}
export default FormInput;