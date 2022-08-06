function Button({ btnName = 'btn', className = '', icon, iconOffset = null, TextElement = 'p', ...props }) {
    const TextElementTag = TextElement;
    const classes = [btnName, className].join(' ');
    const iconClasses = ['sidebar-button__img', iconOffset ? `fragment-margin-right-${iconOffset}` : ''].join(' ')

    return (
        <button className={classes}>
            <img src={icon} className={iconClasses} alt="" />
            <TextElementTag className = 'sidebar-button__text'>{props.children}</TextElementTag>
        </button>
    )
}

export default Button;