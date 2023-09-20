import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer class="footer">
            <div class="content has-text-centered">
                <p>
                    <small>&copy; Copyright 2023, Collin Meyer</small>
                    <br></br>
                    Use this link to <strong><Link to={"/contact"} className="has-text-dark">Contact</Link></strong> me
                    <br></br>
                    Last Updated: Sep 20, 2023 @ 12:25 PM
                </p>
            </div>
        </footer>
    );
};
    
export default Footer;
