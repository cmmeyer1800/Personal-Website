import { useState } from "react"

const Image = (props) => {
    const [isFull, setFull] = useState(false);

    return (
        <div>
            <a href={"/null"} onClick={(e) => {
                e.preventDefault();
                setFull(true);
            }}>
                <img src={props.src} alt={props.alt}></img>
            </a>

            { isFull &&
            <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-content">
                    <p className="image">
                    <img src={props.src} alt={props.alt}></img>
                    </p>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={(e) => {
                    e.preventDefault();
                    setFull(false);
                }}></button>
            </div>
            }
        </div>
    )
}

export default Image;