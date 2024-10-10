import { createPortal } from 'react-dom';

const PopupNotification = ({ copied }) => {
    return (
        createPortal(<section>
            {
                copied && (<div style={{ position: "fixed", top: "10px", right: "10px", padding: "10px", backgroundColor: "green", color: "white", borderRadius: "5px" }}>
                    Text Copied to clipboard!</div>)
            }
        </section>, document.querySelector("#popup-portal"))
    )
}

export default PopupNotification;