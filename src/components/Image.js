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
            <div class="modal is-active">
                <div class="modal-background"></div>
                <div class="modal-content">
                    <p class="image">
                    <img src={props.src} alt={props.alt}></img>
                    </p>
                </div>
                <button class="modal-close is-large" aria-label="close" onClick={(e) => {
                    e.preventDefault();
                    setFull(false);
                }}></button>
            </div>
            }
        </div>
    )
}

export default Image;