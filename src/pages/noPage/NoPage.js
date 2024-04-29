import './NoPage.css'

import { Link } from "react-router-dom";


const NoPage = () => {
    return(
        <div className="columns is-centered">
            <div className="column is-3">
                <div className='message-box offset-top has-background-danger mb-3'>
                    <h1 className="title has-text-centered has-text-white">404</h1>
                    <h1 className="title has-text-centered has-text-white">Page Not Found</h1>
                </div>
                <div className='message-box has-background-danger mt-3'>
                    <h1 className="subtitle has-text-centered has-text-white">
                        If you believe this is an error, please <Link to='/report-an-issue' className='link'>report an issue</Link>
                    </h1>
                </div>
            </div>
        </div>
    );
};
  
export default NoPage;