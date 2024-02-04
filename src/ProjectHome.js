import { rc5Text, peronalSiteText } from "./projectConst"
import Image from "./components/Image";
import { useState } from "react";

const PersonalSiteBody = (props) => {
    return (
        <div>

        </div>
    )
}

const Project = (props) => {
    const [exp, setExp] = useState(false);

    return (
        <div className="box dark-border">
            <h2 className="title">{props.title}</h2><h3 className="subtitle is-italic">{props.date}</h3>
            <div className="columns">
                <div className="column is-12">
                    <p>{props.text}</p>
                </div>
            </div>
            { exp &&
            <div>
                { props.body !== undefined &&
                    <PersonalSiteBody />
                }
                { props.body === undefined &&
                <div className="columns ml-2 mr-2">
                    <div className="column is-8">
                        {props.expText}
                    </div>
                    <div className="column is-4">
                        <Image src={props.img1}/>
                        <p className="has-text-centered">{props.img1Title}</p>
                    </div>
                </div>
                }
            </div>
            }
            <div className="has-text-centered">
                <a href="/expand" onClick={(e) => {
                    e.preventDefault();
                    setExp(!exp)
                }}><h3 className="subtitle is-6">{exp ? 'Show Less' :'Show More'}</h3></a>
            </div>
        </div>
    )
}

const ProjectHome = () =>{
    return (
        <div className="ml-2 mr-2">
            {/* <br></br>
            <div>
                <a className="button is-link" href="https://wiki.collinmmeyer.com/en/docs/home">View Documentation On My Wiki!</a>
            </div> */}
            {/* <br></br> */}
            <Project
                title={'My Personal Website - Where You Are Right Now!'}
                text={peronalSiteText} date={"June 2023 - Present"}
                body={PersonalSiteBody}
            />
            <Project
                title={'RC5 Hardware Encryption Accelerator'}
                text={rc5Text} date={"August 2023 - Present"}
                img1={"https://raw.githubusercontent.com/JasonRomps/RC5-Accelerator/main/assets/RC5-Diagram-3.webp"}
                img1Title={"Hardware Encryption Diagram"}
            />
        </div>
    )
}

export default ProjectHome;