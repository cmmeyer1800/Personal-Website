import { FaArrowRight } from "react-icons/fa";
import FirstPost from "./posts/First.js";
import SecondBlogPost from "./posts/Second.js";


const BlogPostIntro = (props) => {
    return (
        <div className="content is-medium">
            <div className="columns">
                <div className="column is-narrow">
                    <h2 className="subtitle is-4">{props.date}</h2>
                    <a className="title" href={props.link}>
                        <span>{props.title}</span>
                        <div className="icon title ml-4">
                            <FaArrowRight />
                        </div>
                    </a>
                </div>
            </div>
            <p>{props.overview}</p>
        </div>
    )
}


const posts = {
    "2024-04-29": {
        "intro": <BlogPostIntro date="2024-04-29" overview="In my journey of training for a half marathon,
            I have learned alot about running. Far more importantly however, I have learned alot about myself
            and doing difficult things. This post explores that journey and some interesting insights."
            link="/blog/2024-04-29" title="Running is Hard, Hard is Inevitable and Important"/>,
        "post": <SecondBlogPost/>,
        "publish": false
    },
    "2023-12-22": {
        "intro": <BlogPostIntro date="2023-12-22" overview="This is the first post on my blog.
            I want to explain my impetuous for starting a blog, along with some plans I have for the blog. 
            Check it out if you want to learn more!" link="/blog/2023-12-22" title="Why Are You Doing This Anyway?"/>,
        "post": <FirstPost/>,
        "publish": true
    },
}

export default posts;