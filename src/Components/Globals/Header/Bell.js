import IconButton from "./IconButton";
import { BsBell } from "react-icons/bs";
import Badge from "./Badge";
import BellPopup from "./BellPopup";
import { useContext } from "react";
import { MessageContext } from "../../../Contexts/MessageContext";

import { useState } from "react";

export default function Bell() {
    const [popupIsActive, setPopupActive] = useState(false);

    return (
        <div className="header-bell">
            <IconButton onClick={() => setPopupActive(!popupIsActive)}>
                <Badge>
                    <BsBell></BsBell>
                </Badge>
            </IconButton>
            <BellPopup active = {popupIsActive}></BellPopup>
        </div>
    )
}