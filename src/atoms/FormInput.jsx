const FormInput = ({id, name, type, label, onChange, value}) => {
    return (
        <div className="form-field">
            <label htmlFor={id} aria-label={label}>{label} </label>
            <input
                type={type}
                id={id}
                name={name}
                placeholder={label}
                value={value}
                onChange={onChange} />
        </div>
    );
}
export default FormInput;