import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus, faMagnifyingGlass, faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Contact from '~/components/Contact';
import { Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import { Button, Drawer, Space } from 'antd';
import { UserContext } from '~/UserContext';
import Login from '~/pages/login';
import RegisterPage from '~/pages/register';
import DarkMode from '~/components/DarkMode/DarkMode';
import Search from '~/pages/search';
import axios from 'axios';
const cx = classNames.bind(styles);

export default function Sidebar() {
    // const [username, setUsername] = useState(null);
    const [open, setOpen] = useState(false);
    const { setUserInfo, userInfo } = useContext(UserContext);
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        axios
            .get('http://localhost:3000/post/profile', { withCredentials: true })
            .then((response) => {
                setUserInfo(response.data);
            })
            .catch((error) => {
                console.error('Error fetching user profile:', error);
            });
    }, []);
    function logout() {
        fetch('http://localhost:3000/logout', {
            credentials: 'include',
            method: 'POST',
        });
        setUserInfo(null);
    }

    const toggleLogin = () => {
        setShowLogin(!showLogin);
    };

    const toggleRegister = () => {
        setShowRegister(!showRegister);
    };

    const toggleLoginModal = () => {
        setShowLogin(!showLogin);
        setShowRegister(false);
    };

    const toggleRegisterModal = () => {
        setShowRegister(!showRegister);
        setShowLogin(false);
    };
    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };
    const username = userInfo?.username;

    return (
        <aside className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('fragment')}>
                    <div className={cx('darkmode')}>
                        <DarkMode />
                    </div>
                </div>

                <div className={cx('menu')}>
                    <ul className={cx('menu-list')}>
                        <li>
                            <Link to="/">FACEBOOK-PHAKE</Link>
                        </li>
                        {/* <li>
                            <Link to="/fashion">FASHION</Link>
                        </li>
                        <li>
                            <Link to="/cinema">CINEMA</Link>
                        </li>
                        <li>
                            <Link to="/grooming">GROOMING</Link>
                        </li> */}
                    </ul>
                </div>
                {username && (
                    <>
                        <div className={cx('menu-contact')}>
                            <ul>
                                <li className={cx('menu-mode')}>
                                    <button className={cx('search-icon')} onClick={() => setShowSearch(!showSearch)}>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#000000' }} />
                                    </button>
                                    {showSearch && (
                                        <div className={cx('modal-wrapper')}>
                                            <div className={cx('modal-content')}>
                                                <button
                                                    className={cx('modal-close-button-search')}
                                                    onClick={toggleSearch}
                                                >
                                                    X
                                                </button>
                                                <Search />
                                            </div>
                                        </div>
                                    )}
                                </li>
                                <li className={cx('menu-login')}>
                                    <Link to="/create">
                                        <Button className={cx('add-post-button')}>
                                            <FontAwesomeIcon icon={faPlus} style={{ color: '#000000' }} />
                                        </Button>
                                    </Link>
                                </li>
                                <li className={cx('menu-bars')}>
                                    <Button className={cx('logout')} onClick={logout}>
                                        <FontAwesomeIcon icon={faRightFromBracket} style={{ color: '#000000' }} />
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </>
                )}
                {!username && (
                    <div className={cx('menu-contact')}>
                        <ul>
                            <li className={cx('menu-mode')}>
                                <button className={cx('search-icon')} onClick={() => setShowSearch(!showSearch)}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#000000' }} />
                                </button>
                                {showSearch && (
                                    <div className={cx('modal-wrapper')}>
                                        <div className={cx('modal-content')}>
                                            <button className={cx('modal-close-button-search')} onClick={toggleSearch}>
                                                X
                                            </button>
                                            <Search />
                                        </div>
                                    </div>
                                )}
                            </li>
                            <li className={cx('menu-login')}>
                                <button className={cx('user-icon-button')} onClick={() => setShowLogin(!showLogin)}>
                                    <FontAwesomeIcon icon={faUser} style={{ color: '#000000' }} />
                                </button>
                                {showLogin && (
                                    <div className={cx('modal-wrapper')}>
                                        <div className={cx('modal-content')}>
                                            <button className={cx('modal-close-button')} onClick={toggleLogin}>
                                                X
                                            </button>
                                            <Login onRegisterClick={toggleRegisterModal} />
                                        </div>
                                    </div>
                                )}

                                {showRegister && (
                                    <div className={cx('modal-wrapper')}>
                                        <div className={cx('modal-content')}>
                                            <button className={cx('modal-close-button')} onClick={toggleRegister}>
                                                X
                                            </button>
                                            <RegisterPage onLoginClick={toggleLoginModal} />
                                        </div>
                                    </div>
                                )}
                            </li>
                            <li className={cx('menu-bars')}>
                                <Space>
                                    <Button className={cx('bars')} onClick={showDrawer}>
                                        <FontAwesomeIcon icon={faBars} style={{ color: '#000000' }} />
                                    </Button>
                                </Space>
                                <Drawer placement="right" onClose={onClose} open={open}>
                                    <div>
                                        <Contact />
                                    </div>
                                </Drawer>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </aside>
    );
}
