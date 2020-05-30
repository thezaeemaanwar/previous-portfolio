import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic08 from '../assets/images/pic08.jpg'
import pic06 from '../assets/images/pic06.jpg'
import pic07 from '../assets/images/pic07.jpg'
import pic09 from '../assets/images/img09.png'


class Homepage extends React.Component {
    render() {
        const siteTitle = "Zaeema Anwar";

        return (
          <Layout>
            <Helmet title={siteTitle} />

            <section id="one" className="main style1">
              <div className="grid-wrapper">
                <div className="col-6">
                  <header className="major">
                    <h2>
                      Voila !<br />
                      More about me
                    </h2>
                  </header>
                  <p>
                    Well I like computers, Seems a pretty vague statement but I
                    do. Since my childhood I was attracted to computers and
                    coding. And here I am now, doing what I love: <b>coding</b>
                    and <b>designing.</b>
                    <br />
                    (Watching <b>Batman</b> and <b>Avengers</b> series too. ;-)
                  </p>
                  <p>
                    I love fictional movies and characters so I watch a lot of
                    animated movies specifically those from DC Comics. Oh, back
                    to the professional part. <br />
                    Scroll down to unleash the real me.
                  </p>
                </div>
                <div className="col-6">
                  <span className="image fit">
                    <img src={pic01} alt="" />
                  </span>
                </div>
              </div>
            </section>

            <section id="two" className="main style2">
              <div className="grid-wrapper">
                <div className="col-6">
                  <span id="octaprofile">
                    <img src={pic09} alt = ""></img>
                  </span>
                </div>
                <div className="col-6">
                  <header className="major">
                    <h2>
                      Not bored yet ?
                      <br />
                      Here's more about me
                    </h2>
                  </header>
                  <p>
                    <h3>Studies</h3>I am a sophomore of BS Computer Science
                    program in one of the oldest and most prestigious institute
                    of Pakistan, 
                    <a href="https://www.uet.edu.pk/">
                      University of Engineering and Technology, Lahore
                    </a>
                    . <br />
                    Interested in my <b>CGPA </b> ? No off course you aren't
                    because I too, am not.
                    <br />
                    <b>My Extracurriculars : </b> Well basically included in
                    curriculars. I am a member of Google Developer Student Club{' '}
                    <a href="https://dscuet-website.firebaseapp.com/">
                      UET Chapter
                    </a>
                  </p>
                  <h3>What I am exactly?</h3>
                  <p>
                    Right now I am on my way of becoming flutter developer.
                    Other than that I have done projects in C++ and C#. I have
                    interest in Web Development too so I have learnt HTML5.
                  </p>
                </div>
              </div>
            </section>

            <section id="three" className="main style1 special">
              <div className="grid-wrapper">
                <div className="col-12">
                  <header className="major">
                    <h2>I also create illustrations and designs</h2>
                  </header>
                  <p>Some of my creations are here below</p>
                </div>

                <div className="col-4">
                  <span className="image fit">
                    <img src={pic02} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={pic03} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={pic06} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={pic04} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={pic08} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={pic07} alt="" />
                  </span>
                </div>
              </div>
            </section>

            <section id="four" className="main style2 special">
              <div className="container">
                <header className="major">
                  <h2>Managed to like me anyhow?</h2>
                </header>
                <p>
                  Contact me on social media <br /> I would love to hear
                  suggestions or anything else from you
                </p>
                <ul className="actions uniform">
                  <li>
                    <a href="#" className="button">
                      To the top
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </Layout>
        )
    }
}

export default Homepage;