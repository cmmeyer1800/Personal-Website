import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    <small>&copy; Copyright 2023, Collin Meyer</small>
                    <br></br>
                    Use this link to <strong><Link to={"/contact"} className="has-text-dark">Contact</Link></strong> me
                    <br></br>
                    Last Updated: {process.env.REACT_APP_DATE_TIME}
                </p>
            </div>
        </footer>
    );
};
    
export default Footer;
