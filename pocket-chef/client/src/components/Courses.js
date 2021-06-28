import React from 'react';
import {useLocation, Link, useHistory} from 'react-router-dom'

//Add 'link' property to link to search page with appropriate filter in url?
const courses = [
    {
        "_id": "001",
        "title": "Master Class for Grilling",
        "poster_path": "https://images.louisiana-grills.com/catalog/louisiana-grills/products/Brickyard_Lifestyle_0001.png",
        "description":"It’s really worthwhile to spend $10 and buy an instant-read thermometer, which makes grilling easier and safer. You will insert this thermometer into the center of the steak to see if it’s done to your liking. For example, medium is 145 degrees Fahrenheit. Well-done is 160 degrees F.",
        "author":"Margret Baldwin"
    },
    {
        "_id": "002",
        "title": "Sneaky Deserts\n"+"with vegetables",
        "poster_path": "https://images.ctfassets.net/3vz37y2qhojh/Xx2sDpdZJ0uTOGq1pfnpb/72d360d4eee8831b331b9ae644e706b9/Key_Lime-Spinach_Cupcakes_hero.jpg?w=750&fit=fill&fm=webp",
        "description": "These emerald green cupcakes contain a healthy surprise bonus: spinach puree in the batter! The secret is safe, though, because what you taste is the flavor of fresh lime juice and zest. Key limes (aka Mexican limes) are especially sweet here, but regular grocery store Persian limes work well too.",
        "author":"Ashley Strickland Freeman"

    },
    {
        "_id": "003",
        "title": "How to Cut Onions\n" +
            "Without Crying",
        "poster_path": "https://images.creativemarket.com/0.1.0/ps/3774997/1820/1213/m1/fpnw/wm1/zicgymuf2bfmwnt6obwkjzdipb1qyz4omzu0k9ehtauhk3wja7wuk2ctxaghnkyo-.jpg?1514199722&s=759b9b8324a1c29ba6b7b50f788a2027",
        "description": "Some people suggest that freezing onions takes away the sob factor. I’m a person, so I tried it out.\n" +
            "\n" +
            "So I stuck a peeled onion in the freezer, figuring that peeling it would help the cold better penetrate the deeper layers. Half an hour later, I started slicing.\n" +
            "\n" +
            "My hands felt like they were on the verge of getting frostbite, and I couldn’t get “Let It Go” out of my head. But I didn’t cry!\n" +
            "\n" +
            "The verdict: It works!!!",
        "author":"Victor Choi"
    }
]

function Courses() {
    return (
        <div className="Page">
            <div className="article-home">
                <section className="featured-article-lists">
                    <div className="small-featured-articles">
                        <h3 className="small-featured-articles-title font-bold">Featured Courses</h3>

                        {
                            courses.map((m, idx) => {
                                return (
                                    <div className="small-featured-article"
                                             href="https://www.masterclass.com/classes/gordon-ramsay-teaches-cooking-restaurant-recipes-at-home">
                                        <Link className="img-wrapper" to={{
                                            pathname:"/courses_detail",
                                            state:{courses:m}
                                        }}>
                                            <img alt src={m.poster_path}
                                                 className="img-fluid" className="article-image" width="208"
                                                 data-pin-nopin="true"/>
                                        </Link>
                                        <div className="small-article-blurb">
                                            <h3 className="article-title three-line-truncate font-bold p2-text">{m.title}</h3>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <a className="featured-article hidden-description has-long-title">
                        <div className="img-wrapper">
                            <img alt="" class="img-fluid"
                                 src="//images.ctfassets.net/3vz37y2qhojh/7EQ0WE1HOcSycjgQAyx052/dfe7489bae8e03980d9ebb552db2197c/Summer_Pesto_and_Prosciutto_Pizza_HERO.jpg?w=640&amp;fit=fill&amp;fm=webp"
                                 className="featured-article-image" width="640" data-pin-nopin=""/>
                        </div>
                        <div className="article-blurb bottom-justified"><h2 class="container-fluid"
                                                                            className="article-title font-bold h4-text">How
                            to Make Pizzeria-Quality Pizza at Home
                            (Hacks
                            and Easy Recipes!)</h2>
                            <p className="article-description p2-text"></p>
                            <p>
                                <form action="mailto:pocket@chef.com" method="GET">
                                    <a className="" data-toggle="collapse" href="pocket@chef.com" role="button"
                                       aria-expanded="false" aria-controls="collapseExample"></a>
                                    <input className="btn btn-outline-dark" type="submit" value='Sign up!'/>
                                </form>
                            </p>
                        </div>
                    </a>
                </section>

                <a className="featured-article " >
                    <div className="img-wrapper"><img alt="" class="img-fluid"
                                                      src="//images.ctfassets.net/3vz37y2qhojh/3Cvkxx86rjrMS1kYg5VsJJ/4a7c8a561e254bf0f389065d873f8311/Tik_Tok_Hero.jpg?w=1352&amp;fit=fill&amp;fm=webp"
                                                      className="featured-article-image" width="1352"
                                                      data-pin-nopin=""/>
                    </div>
                    <div className="article-blurb left-justified"><h2
                        className="article-title font-bold h4-text">Popular TikTok Kitchen Hacks CourseBook</h2><p
                        className="article-description p2-text">Question
                        everything you thought you knew about cooking, eating, and taste!!</p>
                        <p>
                            <form action="mailto:pocket@chef.com" method="GET">
                                <a className="" data-toggle="collapse" href="pocket@chef.com" role="button"
                                   aria-expanded="false" aria-controls="collapseExample"></a>
                                <input className="btn btn-outline-dark" type="submit" value='Sign up!'/>
                            </form>
                        </p>
                    </div>
                </a>

                <a className="featured-article secondary-article">
                    <div className="img-wrapper"><img alt=""
                                                      class="img-fluid"
                                                      src="//images.ctfassets.net/3vz37y2qhojh/5ovxftNE5jbkvWUqcnohYk/472f2dbf2ec1eb26b1e9a5b879dca535/Korean_Burgers.jpg?w=1352&amp;fit=fill&amp;fm=webp"
                                                      className="featured-article-image" width="1352"
                                                      data-pin-nopin=""/>
                    </div>
                    <div className="article-blurb right-justified"><h2
                        className="article-title font-bold h4-text">Whole Course Meal: Burgers</h2><p
                        className="article-description p2-text">Get ready for a big bite! Here are recipes, DIY
                        toppings, and tips to build your own perfect, juicy burger.</p>
                        <p>
                            <form action="mailto:pocket@chef.com" method="GET">
                                <a className="" data-toggle="collapse" href="pocket@chef.com" role="button"
                                   aria-expanded="false" aria-controls="collapseExample"></a>
                                <input className="btn btn-outline-dark" type="submit" value='Sign up!'/>
                            </form>
                        </p>
                    </div>
                </a>


            </div>
        </div>
    );
}


export default Courses;