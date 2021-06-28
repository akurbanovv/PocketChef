import React from 'react';
import {useLocation, Link, useHistory} from 'react-router-dom'
import CFB from './images/CFB.jpeg';
import Articles from "./Courses";

//Add 'link' property to link to search page with appropriate filter in url?

function CoursesDetail() {
    const location = useLocation();
    const course = location.state.courses;
    return (
        <div className="article p-3 text">
            <div className="article-header">
                <section className="article-heading" >
                    <h1 className="article-title">{course.title}</h1>
                    <h2 className="article-desc"></h2>
                    <div className="article-auth">By {course.author}</div>
                </section>
            </div>
            <div className="featured-image">
                <img src={course.poster_path} class="img-fluid" style={{margin:"auto"}}
                     alt="poster"/>
            </div>
            <div className="container">
                <div className="container-desc">
                    <p>{course.description}</p>
                    <p>
                        <form action="mailto:pocket@chef.com" method="GET">
                            <a className="" data-toggle="collapse" href="pocket@chef.com" role="button"
                               aria-expanded="false" aria-controls="collapseExample"></a>
                            <input className="btn btn-outline-dark" type="submit" value='Sign up for full course!'/>
                        </form>
                    </p>
                </div>
            </div>

        </div>
    );

}


export default CoursesDetail;