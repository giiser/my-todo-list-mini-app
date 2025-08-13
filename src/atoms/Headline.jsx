const Headline = ({level, value=''}) => {
    const HeadingTag = `h${level}`;
    return (
        <HeadingTag>
            {value}
        </HeadingTag>
    );
}
export default Headline;