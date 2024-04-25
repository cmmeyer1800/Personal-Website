import { FaArrowRight } from "react-icons/fa";


const BlogPostInto = (props) => {
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


const BlogHome = () => {
    return (
        <div>
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-6 is-offset-3">
                                <figure className="image">
                                    <img src="/formula-post-win.webp" alt="" style={{borderRadius: "20px"}}></img>
                                </figure>
                            </div>
                        </div>

                        <section className="section" style={{paddingTop: "5px"}}>
                            <div className="columns">
                                <div className="column is-8 is-offset-2">
                                    <hr></hr>
                                    <BlogPostInto date="2023-12-22" overview="In my journey of training for a half marathon,
                                        I have learned alot about running. Far more importantly however, I have learned alot about myself
                                        and doing difficult things. This post explores that journey and some interesting insights."
                                        link="/blog/2024-03-31" title="Running is Hard, Hard is Inevitable and Important"/>
                                    <hr></hr>
                                    <BlogPostInto date="2023-12-22" overview="This is the first post on my blog.
                                    I want to explain my impetuous for starting a blog, along with some plans I have for the blog. 
                                    Check it out if you want to learn more!" link="/blog/2023-12-22" title="Why Are You Doing This Anyway?"/>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogHome;