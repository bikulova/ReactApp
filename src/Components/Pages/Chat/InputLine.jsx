import { GrGallery } from 'react-icons/gr';
import { AiOutlineFileGif } from 'react-icons/ai';
import { AiOutlineSend } from 'react-icons/ai';
import Line from './Line';

export default function InputLine(props) {
    return (
        <div className="inputLine">
            <GrGallery className="icon fragment-margin-right-16"></GrGallery>
            <AiOutlineFileGif className="icon fragment-margin-right-32"></AiOutlineFileGif>
            <Line InputRef={props.InputRef}></Line>
            <AiOutlineSend onClick={(e) => props.SendMessageHandler(e)} className="icon fragment-margin-left-16"></AiOutlineSend>
        </div>
    )
}