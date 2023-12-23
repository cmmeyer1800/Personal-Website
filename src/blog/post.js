import {useParams} from "react-router-dom";
import FirstPost from "./posts/first.js";

const POSTS = {
    "2023-12-22": <FirstPost/>
}

const BlogPost = (props) => {
    const {blogid} = useParams();
    
    return (POSTS[blogid])
}

export default BlogPost;