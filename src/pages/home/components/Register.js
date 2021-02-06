import './Register.css';
import {React, useState } from 'react';

function Register(props) {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [alerts, setAlerts] = useState([]);

    return (
        <div className="register-container">
            <div className="form-group">
                <label><i className="fas fa-envelope"></i> { email === '' ? 'email' : null }</label>
                <input type="email" name="email" id="email" className="form-control" onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <label><i className="fas fa-user"></i> { username === '' ? 'username' : null }</label>
                <input type="text" name="username" id="username" className="form-control" onChange={e => setUsername(e.target.value)} />
            </div>
            <div className="form-group">
                <label><i className="fas fa-key"></i> { password === '' ? 'password' : null }</label>
                <input type="password" name="password" id="password" className="form-control" onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="form-group">
                <label><i className="fas fa-key"></i> { confirmPassword === '' ? 'confirm password' : null }</label>
                <input type="password" name="confirmPassword" id="confirmPassword" className="form-control" onChange={e => setConfirmPassword(e.target.value)} />
            </div>
            <div className="form-group">
                <button id="submit" type="submit"><i className="fas fa-user-plus" />register</button>
            </div>
        </div>
    );
}

export default Register;