import './Home.css';

import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Login from './components/Login';
import Register from './components/Register';
import Dashboard from '../dashboard/Dashboard';
import Auth from '../../helpers/Auth';
import axios from 'axios';

function Home(props) {
    const [user, setUser] = useState({});
    const [state, setState] = useState('home');

    const changeState = (nState) => {
        setState(state => nState);
    }

    const updateUser = async () => {
        await Auth.user().then(data => setUser(data.user));
    }

    const logoutUser = async () => {
        await Auth.logout().then(data => setUser({}));
        changeState('home');
        updateUser();
    }

    useEffect(() => {
        updateUser();
    }, []);

    return (
        <>
            {/* <Helmet>
                <title>Core | Welcome to Core</title>
            </Helmet> */}

            <div className="page home">
                {
                    state === 'home' ? 
                    <div className="home-banner">
                        <h1 className="title">Welcome to Core{ user ? ', ' + user.username : null }</h1>
                        <p className="subtitle">Your one stop solution for Software Development.</p>
                    </div>
                    :
                    ''
                }

                <div className={'home-navigation ' + (state !== 'home' ? state === 'dashboard' ? 'dashboard-active' : 'active' : '')}>
                    <span className={state === 'home' ? 'active' : null} onClick={event => changeState('home')} title="Home"><i className="fas fa-home" /></span>
                    {
                        ! user ?
                        <>
                            <span className={state === 'login' ? 'active' : null} onClick={event => changeState('login')} title="Login"><i className="fas fa-sign-in-alt" /></span>
                            <span className={state === 'register' ? 'active' : null} onClick={event => changeState('register')} title="Register"><i className="fas fa-user-plus" /></span>
                        </>
                        :
                        <>
                            <span className={state === 'dashboard' ? 'active' : null} onClick={event => changeState('dashboard')} title="Dashboard"><i className="fas fa-chart-line" /></span>
                            <span onClick={logoutUser} title="Logout"><i className="fas fa-sign-out-alt" /></span>
                        </>
                    }
                </div>

                {
                    state === 'login' ?
                    <Login changeState={changeState} updateUser={updateUser} /> : ''
                }

                {
                    state === 'register' ?
                    <Register /> : ''
                }

                {
                    state === 'dashboard' ?
                    <Dashboard /> : ''
                }
            </div>
        </>
    );
}

export default Home;