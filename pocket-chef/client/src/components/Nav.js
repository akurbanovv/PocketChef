import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import Logo from './images/logo.png';
import Search from './images/iconmonstr-magnifier-6.svg';
import $ from 'jquery';

function Nav(props) {
    const currentUser = props.currentUser;
    const setCurrentUser = props.setCurrentUser;
    const history = useHistory();
    
    //Log out user with backend and end session
    const logout = () => {
        $.get('/node_logout').done((data) => {
            if (data.message === "success") {
                history.replace("/");
                setCurrentUser(null);
            }
        })
    }
    
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <a className="navbar-brand" href="/">
            <img src={Logo} alt="Logo" height="48" width="140"
                 className="d-inline-block align-text-top" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/recipes">Recipes</a>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/articles">Articles</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/courses">Courses</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">About Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/search">Search  <i className="fas fa-search"></i></a>
                </li>
            </ul>
            <div className="mx-auto order-0" id="search">

            </div>
            <div className="d-flex">
                { !currentUser ?
                <div className="mx-auto order-1">
                    <button className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#loginModal" id="login-button">Log in</button>
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#registerModal" id="register-button">Sign up</button>

                    {/* Log in Modal*/}
                    <LoginModal setCurrentUser={setCurrentUser}/>
                    {/*Register Modal*/}
                    <RegisterModal setCurrentUser={setCurrentUser}/>
                </div>

                : <div className="mx-auto order-1">
                    <Link to={{
                        pathname: "/profile",
                        state: {
                            currentUser: currentUser
                        }
                    }}>
                        <i id="user-icon" class="fas fa-user"></i>
                    </Link>
                    <button className="btn btn-outline-secondary" id="logout-button" onClick={logout}>Logout</button></div> }
            </div>
        </div>
        </div>
    </nav>);
}

export default Nav;