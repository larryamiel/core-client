import './Register.css';
import {React, useState } from 'react';
import axios from 'axios';

import Loader from 'react-loader-spinner'

function Register(props) {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [fail, setFail] = useState(false);
    const [alerts, setAlerts] = useState([]);

    const register = (e) => {
        e.preventDefault();

        // Set Alerts to Empty
        setAlerts([]);

        // Set Loading to True
        setLoading(true);

        // Post Request to API
        axios.post('http://localhost:5000/user/register', {
            email: email,
            username: username,
            password: password,
            confirmPassword: confirmPassword
        }, {withCredentials: true})
        .then(response => {
            setLoading(false);

            console.log(response);

            if (response.data.status === 'error') {
                setFail(true);
                setAlerts(response.data.error);
            }
            else {
                setSuccess(true);
            }
        }).catch(err => console.log(err));
    }

    return (
        <div className="register-container">
            {
                ! loading && ! success && !fail ?
                <form onSubmit={register}>
                    <div className="form-group">
                        <label><i className="fas fa-envelope"></i> { email === '' ? 'email' : null }</label>
                        <input type="email" name="email" id="email" value={email} className="form-control" onChange={e => setEmail(e.target.value)} />
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
                        <label><i className="fas fa-key"></i> { confirmPassword === '' ? 'confirm password' : null }</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" value={confirmPassword} className="form-control" onChange={e => setConfirmPassword(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <button id="submit" type="submit"><i className="fas fa-user-plus" />register</button>
                    </div>
                </form>
                :
                ''
            }

            { loading ? <Loader type="Circles" color="#05386b" height={30} width={30} /> : null }

            { success ?
            <div className="success">
                <p>Registration was successful, please proceed to login.</p>
            </div>
            : null }

            { fail ? 
            <div className="alerts">
                {alerts.map((alert, index) => {
                    return <p key={index}>{alert}</p>
                })}

                <button onClick={e => {
                    setFail(false);
                    setAlerts([]);
                    }} type="button"><i className="fas fa-redo-alt" />try again</button>
            </div>
            : null }
        </div>
    );
}

export default Register;