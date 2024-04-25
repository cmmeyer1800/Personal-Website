import {useParams} from "react-router-dom";
import FirstPost from "./posts/first.js";
import SecondBlogPost from "./posts/Second.js";

import NoPage from "../NoPage.js";

const POSTS = {
    "2023-12-22": <FirstPost/>,
    "2024-03-31": <SecondBlogPost/>
}

const BlogPost = (props) => {
    const {blogid} = useParams();

    if(!(blogid in POSTS)) {
        return (<NoPage/>)
    }
    
    return (POSTS[blogid])
}

export default BlogPost;