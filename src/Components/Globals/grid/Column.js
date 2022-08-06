import React from 'react';

const Column = React.forwardRef(({ componentName = 'div', containerName = 'col', className = '', span = '12', ...props }, ref) => {
    const numberAttr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    if (numberAttr.indexOf(span) == -1) {
        throw new Error('underfined col span')
    }
    const classWithSpan = [containerName, span].join('-');
    const classes = [classWithSpan, className].join(' ');
    const ComponentTag = componentName;

    return (
        <ComponentTag ref={ref} className={classes}>{props.children}</ComponentTag>
    )
})
export default Column;