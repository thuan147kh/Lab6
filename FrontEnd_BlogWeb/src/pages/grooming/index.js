import styles from './Grooming.module.scss';
import classNames from 'classnames/bind';
import Post from '~/pages/post';
import { useState, useEffect } from 'react';
import axios from 'axios';
const cx = classNames.bind(styles);

export default function LifeStyle() {
    const [posts, setPosts] = useState([]);
    const grooming = 'grooming';

    useEffect(() => {
        axios
            .get(`http://localhost:3000/post/getPostByCategories/${grooming}`)
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    });

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('grooming-block')}>
                    <p className={cx('grooming-title')}>Grooming</p>
                </div>
                <div className={cx('grooming-contain')}>
                    {posts.length > 0 && posts.map((post) => <Post {...post} classname={cx('post')} />)}
                </div>
            </div>
        </div>
    );
}
