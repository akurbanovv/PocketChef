import React from 'react';
import App from "../App";
import Akhmad from "./images/Akhmad.jpg";
import Amri from "./images/Amri.JPG";
import Jonathan from "./images/Jonathan.jpeg";

function About() {
    return (
        <div
            className="App qa-ready logged-out is-mobile-device set-once article-page-type app-articles platform-mobile show-top-nav">
            <div className="Page" class="container-fluid">
                <div className="article-home" class="container-fluid">
                    <section className="featured-article-lists">
                    </section>

                    <div><h1>Meet the Team</h1></div>
                    <a className="featured-article ">
                        <div className="img-wrapper">
                            <img alt="" src={Akhmad} class="img-fluid" className="featured-article-image" width="1352"
                                 data-pin-nopin=""/>
                        </div>
                        <div className="article-blurb left-justified"><h2
                            className="article-title font-bold h4-text">Akhmadjon Kurbanov</h2><p
                            className="article-description p2-text"> He is a Computer Science and art history major. His
                            interests are to buy expensive things in apple environment</p>
                            <p>
                                <form action="mailto:akurbanov@clarku.edu" method="GET">
                                    <a className="" data-toggle="collapse" href="akurbanov@clarku.edu" role="button"
                                       aria-expanded="false" aria-controls="collapseExample"></a>
                                    <input className="btn btn-outline-dark" type="submit" value='Contact me!'/>
                                </form>
                            </p>
                        </div>

                    </a>

                    <a className="featured-article secondary-article">
                        <div className="img-wrapper">
                            <img alt="" src={Amri} class="img-fluid" className="featured-article-image" width="1352"
                                 data-pin-nopin=""/>
                        </div>
                        <div className="article-blurb right-justified"><h2
                            className="article-title font-bold h4-text">Amritesh Singh</h2><p
                            className="article-description p2-text">He is Computer Science and Economics major. he is
                            interested in photography and calligraphy </p>
                            <p>
                                <form action="mailto:amrsingh@clarku.edu" method="GET">
                                    <a className="" data-toggle="collapse" href="akurbanov@clarku.edu" role="button"
                                       aria-expanded="false" aria-controls="collapseExample"></a>
                                    <input className="btn btn-outline-dark" type="submit" value='Contact me!'/>
                                </form>

                            </p>
                        </div>
                    </a>

                    <a className="featured-article ">
                        <div className="img-wrapper"><img alt="" src={Jonathan} class="img-fluid"
                                                          className="featured-article-image" width="1352"
                                                          data-pin-nopin=""/>
                        </div>
                        <div className="article-blurb left-justified"><h2
                            className="article-title font-bold h4-text">Jonathan Hoff</h2><p
                            className="article-description p2-text"> He is a Computer Science. His interests are jamming
                            with his choir band and occasionally pint of guinness</p>
                            <p>
                                <form action="mailto:jhoff@clarku.edu" method="GET">
                                    <a className="" data-toggle="collapse" href="akurbanov@clarku.edu" role="button"
                                       aria-expanded="false" aria-controls="collapseExample"></a>
                                    <input className="btn btn-outline-dark" type="submit" value='Contact me!'/>
                                </form>

                            </p>
                        </div>
                    </a>

                </div>
            </div>
        </div>


    );
}


export default About;
