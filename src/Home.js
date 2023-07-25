import './Home.css';

import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa'


const ActivityContent = () => {
  return (
    <div className='ml-4 mr-4'>
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-dark act-elem">
                <img src="/he360-logo.svg" alt='Hawkeye 360 Logo'></img>
                <p class="title">Hardware/Software Engineering Intern</p>
                <p className='subtitle'>Summer 2023 - Herndon Virginia</p>
                <hr></hr>
                <p className='content-para'>
                  This summer I am interning at Hawkeye 360 doing both hardware and software,
                  specifically on the testing team, and having a boat load of fun doing it.
                </p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification act-elem dark-border">
                <img src="/IMlogo.png" alt='Illini Motorsports Logo'></img>
                <p class="title">UIUC Formula SAE Combustion</p>
                <p class="subtitle">
                  2023 <FaArrowRight size={15}/> Electronics Lead<br/>
                  2022 <FaArrowRight size={15}/> Electronics Project Lead<br/>
                  2021 <FaArrowRight size={15}/> Electronics Member<br/>
                </p>
                <hr className='is-dark'></hr>
                <p>
                  I have had the privelege of being a apart of IM at UIUC every year. Starting as a member and working my
                  way up to being in charge of a project on electronics, to finally be in charge of all vehicle electronics.
                </p>
                <div className='has-text-centered'><Link to={'/IM'}>See More</Link></div>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-light act-elem dark-border">
              <img src="/ece_logo.png" alt='UIUC ECE logo'></img>
              <p class="title">ECE 391 - Course Assistant</p>
              <p class="subtitle">Spring 2023 & Fall 2023</p>
              <hr className='is-dark'></hr>
              <div class="content">
                For the previous semester I got to serve as a course assistant for ECE391, the University of Illinois'
                premier operating systems class. During this time I was able to help over 100 students in understanding
                operating systems material and also designing their own linux type OS. I have learned alot about how to
                help others and specifically teach tough material in a digestable fashion.
              </div>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-light act-elem dark-border">
              <img src="/state-farm-logo.png" alt='State Farm Logo'></img>
              <p class="title">Software Engineering Intern</p>
              <p class="subtitle">Summer 2022</p>
              <hr className='is-dark'></hr>
              <div class="content">
                During my time at State Farm I worked on the cloud team assisting with the companies move to AWS.
                Not only did I learn many invaluable skills such as AWS and Terraform, but was able to provide value
                to State Farm in building out a large document ingestion framework in the cloud.
              </div>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-dark act-elem">
            <div class="content">
              <p class="title">Personal Projects</p>
              <hr></hr>
              <p class="subtitle">Coming Soon ...</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <div className='container'>
        <div className='columns'>
          <div className='column'>
            <div className='container'>
              <h1 className='title mt-4'>About Me:</h1>
              <div className='box'> 
                <h2 className='title'>
                  👋 Hi, My Name Is Collin Meyer
                </h2>
                <h3 className='subtitle'>
                  → I'm a Computer Engineering student at the University of Illinois Urbana-Champaign
                  expecting to graduate in the spring of 24'.
                  I was born and raised in the Northeast of Illinois for my whole life.
                </h3>
                <h3 className='subtitle has-text-centered'><span className='is-underlined'>Here's some of what I have done, and am doing</span>:</h3>
              </div>
              {/* <div className='has-text-centered'>
                <FaArrowDown size={130}/>
              </div> */}
              {/* <p className='box'>
                👋 Hi, My Name Is Collin Meyer
              </p>  */}
            </div>
          </div>
          <div className='column'>
            <img className='rounded-image' src="/collin-sherman-fsae.png" alt="Me sitting on the formula SAE Car I helped build"></img>
          </div>
        </div>
      </div>
      <ActivityContent />
    </>
  );
}

export default Home;
