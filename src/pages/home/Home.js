import './Home.css';

import { React, useState } from 'react';
import { Helmet } from 'react-helmet';

import Login from './components/Login';
import Register from './components/Register';

function Home(props) {
    const [user, setUser] = useState({});
    const [state, setState] = useState('home');

    const changeState = (nState) => {
        setState(state => nState);
    }

    return (
        <>
            {/* <Helmet>
                <title>Core | Welcome to Core</title>
            </Helmet> */}

            <div className="page home">
                {
                    state === 'home' ? 
                    <div className="home-banner">
                        <h1 className="title">Welcome to Core</h1>
                        <p className="subtitle">Your one stop solution for Software Development.</p>
                    </div>
                    :
                    ''
                }

                <div className={'home-navigation ' + (state !== 'home' ? 'active' : '')}>
                    <span onClick={event => changeState('home')} title="Home"><i className="fas fa-home" /></span>
                    {
                        ! user.username ?
                        <>
                            <span onClick={event => changeState('login')} title="Login"><i className="fas fa-sign-in-alt" /></span>
                            <span onClick={event => changeState('register')} title="Register"><i className="fas fa-user-plus" /></span>
                        </>
                        :
                        <>
                            <span title="Dashboard"><i className="fas fa-chart-line" /></span>
                            <span title="Logout"><i className="fas fa-sign-out-alt" /></span>
                        </>
                    }
                </div>

                {
                    state === 'login' ?
                    <Login /> : ''
                }

{
                    state === 'register' ?
                    <Register /> : ''
                }
            </div>
        </>
    );
}

export default Home;