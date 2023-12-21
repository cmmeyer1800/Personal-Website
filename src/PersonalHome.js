
const Photo = (props) => {
    return (
        <div class={`column ${props.size_args} is-one-half-desktop is-half-tablet`}>
            <div class="card">
                <div class="card-image">
                    <figure class="image is-3by2">
                        <img src={props.url} alt={props.alt}></img>
                    </figure>
                    { props.overlay !== undefined &&
                    <div class="card-content is-overlay is-clipped" title={props.alt}>
                        <span class="tag is-dark">
                            {props.overlay}
                        </span>       
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

const Gallery = () => {
    return (
        <div className="ml-2 mr-2">
            <div class="columns is-multiline">
                <Photo url="/michigan-whole-team.webp" alt="Winning SAE Michigan 2023" size_args="is-one-third-desktop is-half-tablet" overlay={"?"}/>
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