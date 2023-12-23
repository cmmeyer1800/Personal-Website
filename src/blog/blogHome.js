import { FaArrowRight } from "react-icons/fa";


const BlogPostInto = (props) => {
    return (
        <div className="content is-medium">
            <div className="columns">
                <div className="column is-narrow">
                    <h2 className="subtitle is-4">{props.date}</h2>
                    <h1 className="title">
                        <span>{props.title}</span>
                        <a className="icon title ml-4" href={props.link}>
                            <FaArrowRight />
                        </a>
                    </h1>
                </div>
            </div>
            <p>{props.overview}</p>
        </div>
    )
}


const BlogHome = () => {
    return (
        <div>
            <section className="hero ">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-8 is-offset-2">
                                <figure className="image">
                                    <img src="/formula-post-win.webp" alt="" style={{borderRadius: "20px"}}></img>
                                </figure>
                            </div>
                        </div>

                        <section className="section">
                            <div className="columns">
                                <div className="column is-8 is-offset-2">
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