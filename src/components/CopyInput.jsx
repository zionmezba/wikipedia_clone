import { useState } from "react";
import PopupNotification from "./PopupNotification";

const CopyInput = () => {
    const [value, setValue] = useState("");
    const [copied, setCopied] = useState(false);

    const copyHandle = () => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }
    return (
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={copyHandle}>Copy</button>
            <PopupNotification copied={copied} />
        </div>
    )
}
export default CopyInput;