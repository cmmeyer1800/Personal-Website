import { rc5Text } from "./projectConst"

const RC5Project = (props) => {
    return (
        <section class="hero is-link is-medium">
            <div className="hero-head">
                <p class="title mt-2 ml-2">
                    { props.title }
                </p> 
            </div>
            <div class="hero-body">
                <div class="">
                    <p>
                        { props.text }
                    </p>
                </div>
            </div>
        </section>
    )
}

const ProjectHome = () =>{
    return (
        <div>
            <br></br>
            <br></br>
            <RC5Project title={'RC5 Hardware Encryption Accelerator'} text={rc5Text}/>
        </div>
    )
}

export default ProjectHome;