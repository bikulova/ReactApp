import IconButton from "./IconButton";
import { BsSearch } from 'react-icons/bs';
import { useRef } from "react";

export default function Search() {
    const ref = useRef(null);
    const ButtonClick = () => {
        ref.current.classList.toggle('active');
    }

    return (
        <div className='d-flex header-search'>
            <input className="header-search__input" type="text" ref={ref} />
            <IconButton onClick={ButtonClick.bind(this)}>
                <BsSearch></BsSearch>
            </IconButton>
        </div>
    );
}