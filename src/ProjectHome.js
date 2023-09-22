import { rc5Text } from "./projectConst"

import { useState } from "react";

const RC5Project = (props) => {
    const [exp, setExp] = useState(false);

    return (
        // <section className="hero is-link is-medium">
        //     <div className="hero-head">
        //         <p className="title mt-2 ml-2">
        //             { props.title }
        //         </p> 
        //     </div>
        //     <div className="hero-body">
        //         <div className="">
        //             <p>
        //                 { props.text }
        //             </p>
        //         </div>
        //     </div>
        // </section>
        <div className="box dark-border">
            <h2 className="title">{props.title} {(props.date !== undefined) && "::"} {props.date}</h2>
            <div className="columns">
                <div className="column is-5">
                    <p>{props.text}</p>
                </div>
            </div>
            { exp &&
            <div>
                <br></br>
                <br></br>
                <br></br>
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
            <br></br>
            <br></br>
            <RC5Project title={'RC5 Hardware Encryption Accelerator'} text={rc5Text} date={"August 2023 - Present"}/>
            <br></br>
            <br></br>
            <RC5Project title={'RC5 Hardware Encryption Accelerator'} text={rc5Text}/>
            <br></br>
            <br></br>
            <RC5Project title={'RC5 Hardware Encryption Accelerator'} text={rc5Text}/>
        </div>
    )
}

export default ProjectHome;