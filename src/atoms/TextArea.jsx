const TextArea = ({id, name, label, onChange, value}) => {
    return (
        <div className="form-field">
            <label htmlFor={id} aria-label={label}>{label}</label>
            <textarea id={id} name={name} placeholder={label} value={value} onChange={onChange}></textarea>
        </div>
    )
}
export default TextArea;