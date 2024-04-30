import posts from "./blogInfo";

const BlogHome = () => {
    return (
        <div>
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-6 is-offset-3">
                                <figure className="image">
                                    <img src="/img/formula-post-win.webp" alt="" style={{borderRadius: "20px"}}></img>
                                </figure>
                            </div>
                        </div>

                        <section className="section" style={{paddingTop: "5px"}}>
                            <div className="columns">
                                <div className="column is-8 is-offset-2">
                                    {Object.keys(posts).map((key) => 
                                    {
                                        if(!posts[key].publish)
                                        {
                                            return null;
                                        }
                                        return (
                                            <div>
                                                {posts[key].intro}
                                                <hr></hr>
                                            </div>
                                        )
                                    })}
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