import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="columns">
            <div className="column has-text-centered">
                <Link to="https://www.linkedin.com/in/collin-meyer-88593a206/">
                    <img src="/linkedin.webp">
                    </img>
                </Link>
            </div>
            <div className="column has-text-centered">
                <Link to="mailto:collinmmeyer@gmail.com">
                    <img src="/mail_logo.webp">
                    </img>
                </Link>
            </div>
            {/* <div className="column has-text-centered">

            </div> */}
        </div>
    );
};

export default Contact;