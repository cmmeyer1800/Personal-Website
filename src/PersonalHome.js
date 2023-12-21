import {useState} from 'react';

const Photo = (props) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div class={`column ${props.size_args}`}>
            <div class="card">
                <div class="card-image">
                    <figure class="image is-3by2">
                        <img src={props.url} alt={props.alt}></img>
                    </figure>
                    <div class="card-content is-overlay is-clipped">
                        <a class="tag is-dark" href='#none' onClick={(e) => {
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
        <div className="ml-2 mr-2">
            <div class="columns is-multiline">
                <Photo url="/michigan-whole-team.webp" alt="Winning SAE Michigan 2023"
                       size_args="is-one-third-desktop is-half-tablet"/>
                <Photo url="/michigan-whole-team.webp" alt="Winning SAE Michigan 2023"
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