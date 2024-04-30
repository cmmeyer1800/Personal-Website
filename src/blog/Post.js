import {useParams} from "react-router-dom";
import posts from "./blogInfo.js";

import NoPage from "../pages/noPage/NoPage.js";


const BlogPost = (props) => {
    const {blogid} = useParams();

    if(!(blogid in posts) || !posts[blogid].publish) {
        return (<NoPage/>)
    }
    
    return (posts[blogid].post)
}

export default BlogPost;