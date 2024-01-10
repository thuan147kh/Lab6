import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '~/UserContext';
import axios from 'axios';
const cx = classNames.bind(styles);

export default function Login({ onRegisterClick }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const { setUserInfo } = useContext(UserContext);
    async function login(event) {
        const ev = event;
        ev.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:3000/login',
                { username, password },
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                },
            );

            if (response.status === 200) {
                setUserInfo(response.data);
                setRedirect(true);
                alert('Login successful');
            } else {
                alert('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('Login failed');
        }
    }
    if (redirect) {
        return <Navigate to={'/'} />;
    }
    return (
        <form className={cx('login')} onSubmit={login}>
            <h1 className={cx('login-title')}>Login</h1>
            <input
                className={cx('login-input')}
                type="text"
                placeholder="username"
                value={username}
                onChange={(ev) => setUsername(ev.target.value)}
            />
            <input
                className={cx('login-input')}
                type="password"
                placeholder="password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
            />
            <button>Login</button>
            <p>
                No account?
                <span>
                    <a className={cx('register-redirect')} onClick={onRegisterClick}>
                        Register
                    </a>
                </span>
            </p>
        </form>
    );
}
