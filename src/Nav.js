import { Link } from "react-router-dom";
import { useState } from "react";
import './Nav.css'

const Nav = () => {
    const [navActive, setNavActive] = useState(false);

    return (
        <nav className="navbar mt-1 border-bot" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="ml-1 navbar-item logo" to="/">
                    <h1 className="subtitle">CM</h1>
                </Link>

                <a role="button" href="/null" className={`navbar-burger ${navActive ? 'is-active': ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={(e) => {
                    e.preventDefault()
                    setNavActive(!navActive);
                }}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className={`navbar-menu ${navActive ? 'is-active': ''}`}>
                <div className="navbar-start">
                    <Link className="navbar-item" to="/projects">Projects</Link> 
                    <Link className="navbar-item" to="/personal">Personal</Link>
                    {/* <Link className="navbar-item" to="/">Home</Link> */}

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link" href="/null" onClick={(e) => {e.preventDefault()}}>
                            More
                        </a>

                        <div className="navbar-dropdown">
                            <Link className="navbar-item" to="/contact">Contact</Link>
                            <hr className="navbar-divider"></hr>
                            <a className="navbar-item" href="https://github.com/cmmeyer1800/personal_website/issues">
                                Report an issue
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav