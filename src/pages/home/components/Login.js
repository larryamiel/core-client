import './Login.css';
import {React, useState } from 'react';

function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alerts, setAlerts] = useState([]);

    return (
        <div className="login-container">
            <div className="form-group">
                <label><i className="fas fa-user"></i> { username === '' ? 'username' : null }</label>
                <input type="text" name="username" id="username" className="form-control" onChange={e => setUsername(e.target.value)} />
            </div>
            <div className="form-group">
                <label><i className="fas fa-key"></i> { password === '' ? 'password' : null }</label>
                <input type="password" name="password" id="password" className="form-control" onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="form-group">
                <button id="submit" type="submit"><i className="fas fa-sign-in-alt" />login</button>
            </div>
        </div>
    );
}

export default Login;