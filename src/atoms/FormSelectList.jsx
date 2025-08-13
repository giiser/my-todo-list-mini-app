const FormSelectList = ({id, label, options}) => {
    return (
        <div className="form-field">
            <label htmlFor={id} aria-label={label}>{label}</label>
            <select id={id}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>

    );
}
export default FormSelectList;