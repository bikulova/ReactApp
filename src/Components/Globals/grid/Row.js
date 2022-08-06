import React from 'react';

const Row = React.forwardRef(({ componentName = 'div', containerName = 'row', className = '', ...props }, ref) => {
    const classes = [containerName, className].join(' ');
    const ComponentTag = componentName;

    return (
        <ComponentTag ref={ref} className={classes}>{props.children}</ComponentTag>
    )
})
export default Row;