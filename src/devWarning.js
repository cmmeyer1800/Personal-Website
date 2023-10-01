import { useState } from "react"

const DevWarning = () => {
    const [shown, setShown] = useState(true);

    const test = process.env.REACT_APP_ENV === "test"
    const dev = process.env.REACT_APP_ENV === "dev"

    return (
        <>
        { (test || dev) && shown &&
        <div className='hero is-danger is-small'>
            <a href="/null" className="mt-1 ml-1" onClick={(e) => {e.preventDefault(); setShown(false)}}>Hide</a>
            <div className='hero-body has-text-centered title'>
                <div className="columns">
                    <div className="column title">
                        Warning: This is a {test ? "test" : "development"} build, the production site is at:
                    </div>
                    <div className="column is-narrow title">
                        <a href="https://collinmmeyer.com">collinmmeyer.com</a>
                    </div>
                </div>
            </div>
        </div>
        }
        </>
    )
}

export default DevWarning