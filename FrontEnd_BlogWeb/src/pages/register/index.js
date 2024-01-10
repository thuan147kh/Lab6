import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
const cx = classNames.bind(styles);

export default function RegisterPage({ onLoginClick }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    async function register(ev) {
        ev.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/register', {
                username,
                password,
            });
            if (response.status === 201) {
                setRedirect(true);
                alert('Registration successful');
            }
        } catch (error) {
            console.error('User already exists', error);
            alert('User already exists');
        }
    }
    if (redirect) {
        return <Navigate to={'/'} />;
    }
    return (
        <form className={cx('register')} onSubmit={register}>
            <h1>Register</h1>
            <input
                className={cx('register-input')}
                type="text"
                placeholder="username"
                value={username}
                onChange={(ev) => setUsername(ev.target.value)}
            />
            <input
                className={cx('register-input')}
                type="password"
                placeholder="password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
            />
            <button>Register</button>
            <p>
                Already have an account?
                <span>
                    <a className={cx('login-redirect')} onClick={onLoginClick}>
                        Login
                    </a>
                </span>
            </p>
        </form>
    );
}
