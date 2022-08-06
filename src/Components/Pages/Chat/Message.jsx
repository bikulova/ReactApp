export default function Message({ text = "", time }) {
    return (
        <div className="wrapper">
            <div className="message"> {
                text
            }
            </div>
            <span>{time}</span>
        </div>
    )
}