import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { useState, useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import Post from '~/pages/post';
import { on } from 'events';
const cx = classNames.bind(styles);

export default function Search({ onSearchClick }) {
    const [query, setQuery] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [posts, setPosts] = useState([]);
    async function search(event) {
        const ev = event;
        if (ev.key === 'Enter') {
            ev.preventDefault();
            try {
                const response = await axios
                    .get('http://localhost:3000/post/search?', {
                        params: { query: query },
                    })
                    .then((response) => {
                        setPosts(response.data);
                        console.log(response.data);
                        setRedirect(true);
                    });
            } catch (error) {
                console.error('Error during search:', error);
            }
            if (redirect) {
                return <Navigate to={'/'} />;
            }
        }
    }
    return (
        <div>
            <div className={cx('search')}>
                <input
                    onKeyDown={search}
                    className={cx('search-input')}
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={(ev) => setQuery(ev.target.value)}
                />
            </div>

            <div className={cx('container')}>
                <div>{posts.length > 0 && posts.map((post) => <Post {...post} classname={cx('post')} />)}</div>
            </div>
        </div>
    );
}
