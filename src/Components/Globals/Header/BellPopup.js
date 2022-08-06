export default function BellPopup ({active = false, ...props}) {
    return (
        <div className = {`bellPopup ${active ? 'active' : ''}`}></div>
    )
}