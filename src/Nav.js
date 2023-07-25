import { Link } from "react-router-dom";
import { useState } from "react";
import './Nav.css'

const Nav = () => {
    const [navActive, setNavActive] = useState(false);

    return (
        <nav class="navbar mt-1 mb-2 border-bot" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <Link class="ml-1 navbar-item logo" to="/">
                    <h1 className="subtitle">CM</h1>
                </Link>

                <a role="button" class={`navbar-burger ${navActive ? 'is-active': ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={(e) => {
                    e.preventDefault()
                    setNavActive(!navActive);
                }}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class={`navbar-menu ${navActive ? 'is-active': ''}`}>
                <div class="navbar-start">
                    <Link class="navbar-item" to="/">Home</Link>
                    <Link class="navbar-item" to="/personal">Personal</Link>
                    {/* <Link class="navbar-item" to="/">Home</Link> */}

                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link" href="/null" onClick={(e) => {e.preventDefault()}}>
                            More
                        </a>

                        <div class="navbar-dropdown">
                            <Link class="navbar-item" to="/contact">Contact</Link>
                            <hr class="navbar-divider"></hr>
                            <a class="navbar-item">
                                Report an issue
                            </a>
                        </div>
                    </div>
                </div>

                {/* <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a class="button is-light">
                                Log in
                            </a>
                        </div>
                    </div>
                </div> */}
            </div>
        </nav>
    );
}

export default Nav