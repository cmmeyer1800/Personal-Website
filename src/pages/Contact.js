import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="columns">
            <div className="column has-text-centered">
                <Link to="https://www.linkedin.com/in/collin-meyer-88593a206/">
                    <img src="/img/linkedin.webp" alt="Reach me on LinkedIn">
                    </img>
                </Link>
            </div>
            <div className="column has-text-centered">
                <Link to="mailto:collinmmeyer@gmail.com">
                    <img src="/img/mail_logo.webp" alt="Send me and email">
                    </img>
                </Link>
            </div>
            {/* <div className="column has-text-centered">

            </div> */}
        </div>
    );
};

export default Contact;