import React from 'react';

const Container = React.forwardRef(({ componentName = 'div', containerName = 'container', className = '', fluid = false, ...props }, ref) => {
    const classes = [containerName, className].join(' ');
    const ComponentTag = componentName;

    return (
        <ComponentTag ref={ref} className={classes}>{props.children}</ComponentTag>
    )
})
export default Container;