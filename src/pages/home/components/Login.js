import './Login.css';
import {React, useState } from 'react';
import axios from 'axios';

import Loader from 'react-loader-spinner'

function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [alerts, setAlerts] = useState([]);

    const login = (e) => {
        e.preventDefault();

        // Set Alerts to Empty
        setAlerts([]);

        // Set Loading to True
        setLoading(true);

        // Post Request to API
        axios.post('http://localhost:5000/user/login', {
            username: username,
            password: password
        }, { withCredentials: true })
        .then(response => {
            setLoading(false);

            if (response.data.status === 'error') {
                setAlerts(response.data.error);
            }
            else {
                props.changeState('home');
                props.updateUser();
            }
        }).catch(err => console.log(err));
    }

    return (
        <div className="login-container">
            {
                ! loading ?
                <form onSubmit={login}>
                    <div className="alerts">
                        {alerts.map((alert, index) => {
                            return <p key={index}>{alert}</p>
                        })}
                    </div>
                    <div className="form-group">
                        <label><i className="fas fa-user"></i> { username === '' ? 'username' : null }</label>
                        <input type="text" name="username" id="username" value={username} className="form-control" onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label><i className="fas fa-key"></i> { password === '' ? 'password' : null }</label>
                        <input type="password" name="password" id="password" value={password} className="form-control" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <button id="submit" type="submit"><i className="fas fa-sign-in-alt" />login</button>
                    </div>
                </form>
                :
                ''
            }

            { loading ? <Loader type="Circles" color="#05386b" height={30} width={30} /> : null }
        </div>
    );
}

export default Login;