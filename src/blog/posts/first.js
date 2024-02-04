import React from 'react';


const FirstBlogPost = () => {
    return (
        <div className='hero mb-4'>
                <figure className='image mt-1'>
                    <img src="/skyline.jpeg" alt=""></img>
                </figure>
                <div className="columns mt-2 ml-1 mr-1">
                    <div className="column is-6 is-offset-3">
                        <div className="content">
                            <h1 className="">Why Are You Doing This Anyway?</h1>
                            <h5>By: Collin Meyer</h5>
                            <h6>Published: Sunday February 3<sup>rd</sup>, 2024</h6>
                            <p style={{textIndent: 30}}>
                                After years of projects, 4 years of undergrad, and several internships, i'd like to think I have gained some knowledge to share with others.
                                Knowledge that may help others along journeys similar to mine. I have always been a fan of sharing knowledge, 
                                seeing the spark in someone when they "get it", and I think that this is a great way to do so.
                                In the future I hope to share not only my technical knowledge, but also life experiences, and other tid-bits I have learned along the way.
                                This is not an entirely selfless endeavor however, as I hope to learn several valuable skills along the way, such as writing.
                            </p>
                            <div className='columns'>
                                <div className='column'>
                                    <p style={{textIndent: 30}}>
                                        I would also like to use this first post to give a more in-depth background on myself, not only to give context to my future posts, but also to give a more personal touch to the blog.
                                        An overview of who I am and what i'm up to can be found at <a href='/'>my websites home page</a>, so I will <em>try to</em> avoid reiterating too much of that information here.
                                        At the time of writing this post, I am a 22 year old college student, in my final semester at UIUC, trying to get the most of out this chapter of my life before I move on to the next.
                                        I am working 3 part-time jobs, to fill my time as I have very little classwork remaining. I am training for the
                                        <a href='https://illinoismarathon.com/races/half-marathon/'> Illinois Half-Marathon</a> in April (I am not a runner, so this is a big deal for me 🤣). In the time that remains
                                        from those activities, I enjoy working on personal projects, and spending time with my friends and family. Thats a brief overview of me, 
                                        that will likely expand in following posts.
                                    </p>
                                </div>
                                <div className='column'>
                                    <figure className='image mt-1'>
                                        <img src="/me-working-on-fsae.jpg" alt="" style={{borderRadius: "15px"}}></img>
                                    </figure>
                                    <div className='has-text-centered'>Me working on FSAE vehicle</div>
                                </div>
                            </div>
                            <h3>Technical Blogs</h3>
                            <p style={{textIndent: 30}}>
                                When it comes to technical information, there are many different topics I would like to cover with this blog.
                                I would like to highlight some of the projects I have worked on, and the lessons I have learned from them, and hopefully you can to.
                                Along with this I will likely do some technical write-ups on topics that I think are important and for which I have had to scour the internet to find.
                                I am self taught to a very large extent, utilizing the internet to learn the vast majority of what I know, and I would like to give back to that community.
                            </p>
                            <p>Briefly, <strong>some</strong> of the technical topics I would like to cover are:</p>
                            <ul>
                                <li>How to research technical topics (<strong><u><a className='bold has-text-dark' href='https://quoteinvestigator.com/2015/08/28/fish/'>Important</a></u></strong>)</li>
                                <li>My favorite resources to get information from</li>
                                <li>Python, why its amazing and why it (sometimes) isn't</li>
                                <li>Enough linux/unix to be dangerous</li>
                                <li>How a computer works, a practical prospective</li>
                            </ul>
                            <h3>Personal Blogs</h3>
                            <p style={{textIndent: 30}}>
                                Personal blogs are a bit more difficult to plan out, as they are more spontaneous and less structured. But there are topics
                                I wish to cover that are not technical in nature. I would like to share some of my life experiences, and the lessons I have learned from them.
                                Namely, things such as: navigating college, internships, and the job search, prioritizing health, etc.
                            </p>
                            <h3>Conclusion</h3>
                            <p style={{textIndent: 30}}>
                                Thank you to anyone who stuck around to make it to the end of this post.
                                I am certainly <strong>not</strong> a writer (as you can probably tell), but I hope to improve that skill as I continue to write.
                                I hope to see you in the next post, and I hope you enjoy the content I have planned. Now here's a cute picture of my dog...
                            </p>
                            <figure className='image mt-1'>
                                <img src="/dodo.jpg" alt="" style={{borderRadius: "15px"}}></img>
                            </figure>
                        </div>
                    </div>
                </div>
        </div>
    );
}


export default FirstBlogPost;