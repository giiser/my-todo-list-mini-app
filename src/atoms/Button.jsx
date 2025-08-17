const Button = ({classes, buttonLabel, onClick}) => {
    return (
        <>
            <button onClick={onClick} className={classes}>{buttonLabel}</button>
        </>
    );
}
export default Button;