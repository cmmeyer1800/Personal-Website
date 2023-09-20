import { useState } from "react"

const DevWarning = () => {
    const [shown, setShown] = useState(true);

    return (
        <>
        { process.env.REACT_APP_ENV === "dev" && shown &&
        <div className='hero is-danger'>
            <a href="/null" className="mt-1 ml-1" onClick={(e) => {e.preventDefault(); setShown(false)}}>Hide</a>
            <div className='hero-body has-text-centered title'>
            Warning: This is a development build, the production site is at<a href="https://collinmmeyer.com">: collinmmeyer.com</a>
            </div>
        </div>
        }
        { process.env.REACT_APP_ENV === "test" && shown &&
        <div className='hero is-danger'>
            <a href="/null" className="mt-1 ml-1" onClick={(e) => {e.preventDefault(); setShown(false)}}>Hide</a>
            <div className='hero-body has-text-centered title'>
            Warning: This is a test build, the production site is at<a href="https://collinmmeyer.com">: collinmmeyer.com</a>
            </div>
        </div>
        }
        </>
    )
}

export default DevWarning