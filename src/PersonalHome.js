import {useState} from 'react';

const Photo = (props) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={`column ${props.size_args}`}>
            <div className="card">
                <div className="card-image">
                    <figure className="image is-3by2">
                        <img src={props.url} alt={props.alt}></img>
                    </figure>
                    <div className="card-content is-overlay is-clipped">
                        <a className="tag is-dark" href='#none' onClick={(e) => {
                            e.preventDefault();
                            setExpanded(!expanded)
                        }}>
                            <span className='mr-1'>?</span>
                            { expanded &&
                                <span>{props.alt}</span>
                            }
                        </a>       
                    </div>
                </div>
            </div>
        </div>
    )
}

const Gallery = () => {
    return (
        <div className="ml-3 mr-3">
            <div className="columns is-multiline">
                <Photo url="/michigan-whole-team.webp" alt="Winning SAE Michigan 2023"
                       size_args=""/>
                <Photo url="/fsae-testing-overhead.webp" alt="Testing our FSAE car, shot from drone"
                       size_args="is-one-third-desktop is-half-tablet"/>
            </div>
        </div>
    )
}

const PersonalHome = () =>{
    return (
        <div>
            <h1 className="title has-text-centered">Personal Gallery</h1>
            <Gallery />
        </div>
    )
}

export default PersonalHome;