import {useState} from 'react';

const Photo = (props) => {
    const [fs, setFs] = useState(false);

    return (
        <div className={`column ${props.size_args}`} href='#fullscreen'>
            <div className="card">
                <div className="card-image">
                    <figure className="image is-3by2" onClick={(e) => {
                        e.preventDefault();
                        setFs(true);
                    }}>
                        <img src={props.url} alt={props.alt}></img>
                    </figure>
                </div>
            </div>
            { fs &&
                <div className="modal is-active">
                    <div className="modal-background"></div>
                    <div className="modal-content" style={{width: "65%"}}>
                        <figure className="image">
                            <img src={props.url} alt={props.alt}></img>
                        </figure>
                        <p className='has-text-white has-text-centered subtitle is-5'>{props.alt}</p>
                    </div>
                    <button className="modal-close is-large" aria-label="close" onClick={() => setFs(false)}></button>
                </div>
            }
        </div>
    )
}

const Gallery = () => {
    return (
        <div className="ml-3 mr-3">
            <div className="columns is-multiline">
                <Photo url="/img/michigan-whole-team.webp" alt="Winning SAE Michigan 2023"
                       size_args="is-one-third-desktop is-one-half-tablet"/>
                <Photo url="/img/fsae-testing-overhead.webp" alt="Testing our FSAE car, shot from drone"
                       size_args="is-one-third-desktop is-one-half-tablet"/>
                <Photo url="/img/quad_cities_bridge.webp" alt="New bridge in Quad Cities"
                       size_args="is-one-third-desktop is-one-half-tablet"/>
                <Photo url="/img/ozarks.webp" alt="Drone shot of Ozarks lake"
                       size_args="is-one-third-desktop is-one-half-tablet"/>
                <Photo url="/img/fsae-harness-work.webp" alt="Building the harness for our FSAE car"
                       size_args="is-one-third-desktop is-one-half-tablet"/>
                <Photo url="/img/fsae-accel-testing.webp" alt="Acceleration testing for our FSAE car"
                       size_args="is-one-third-desktop is-one-half-tablet"/>
                <Photo url="/img/cubs-game.webp" alt="Attending a Cubs game"
                       size_args="is-one-third-desktop is-one-half-tablet"/>
            </div>
        </div>
    )
}

const GalleryTop = () =>{
    return (
        <div>
            <br></br>
            <h1 className="title has-text-centered">Personal Gallery</h1>
            <Gallery />
        </div>
    )
}

export default GalleryTop;