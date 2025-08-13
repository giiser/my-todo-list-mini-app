const TextArea = ({id, label}) => {
    return (
        <div className="form-field">
            <label htmlFor={id} aria-label={label}>{label}</label>
            <textarea id={id} placeholder={label} />
        </div>
    )
}
export default TextArea;