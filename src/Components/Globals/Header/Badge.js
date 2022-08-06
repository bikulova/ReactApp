export default function Badge({ badgeContent = 13, ...props }) {
    return (
        <div className="header-badge">
            <span className="header-badge-circle">{badgeContent}</span>
            {props.children}
        </div>
    )
}