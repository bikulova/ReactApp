import { FaRegSmile } from 'react-icons/fa';

export default function Line(props) {
    return (
        <div className="border">
            <input type="text" placeholder="Start a new message" ref={props.InputRef} />
            <FaRegSmile className="icon"></FaRegSmile>
        </div>
    )
}