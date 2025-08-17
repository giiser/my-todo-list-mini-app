const FormSelectList = ({id, name, label, options, onChange, value}) => {
    return (
        <div className="form-field">
            <label htmlFor={id} aria-label={label}>{label}</label>
            <select
                value={value}
                onChange={onChange}
                id={id}
                name={name}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>

    );
}
export default FormSelectList;