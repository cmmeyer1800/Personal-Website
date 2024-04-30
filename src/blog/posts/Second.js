import React from 'react';


const SecondBlogPost = () => {
    return (
        <div className='hero mb-4'>
                <figure className='image mt-1'>
                    <img src="/img/skyline.webp" alt=""></img>
                </figure>
                <div className="columns mt-2 ml-1 mr-1">
                    <div className="column is-6 is-offset-3">
                        <div className="content">
                            <h1 className="">Running is Hard, Hard is Inevitable and Important</h1>
                            <h5>By: Collin Meyer</h5>
                            <h6>Published: ---- TODO ----</h6>
                            {/* <h6>Published: Sunday February 3<sup>rd</sup>, 2024</h6> */}
                            <p style={{textIndent: 30}}>
                                I am now around 3 months into my training for the Illinois Half-Marathon, and it has changed me and the way I think about challenges.
                                At the time of writing this post, I have run just shy of 80 miles in total over the course of those 3 months.
                            </p>
                            <div className='columns'>
                                <div className='column'>
                                    <p style={{textIndent: 30}}>
                                        123
                                    </p>
                                </div>
                                <div className='column'>
                                    <figure className='image mt-1'>
                                        <img src="/img/half-marathon-final-stretch-edited.webp" alt="" style={{borderRadius: "15px"}}></img>
                                    </figure>
                                    <div className='has-text-centered'>Me in the last mile of the race</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}


export default SecondBlogPost;