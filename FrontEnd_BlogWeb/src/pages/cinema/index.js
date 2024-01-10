import styles from './Cinema.module.scss';
import classNames from 'classnames/bind';
import Post from '~/pages/post';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

export default function Cinema() {
    const cinema = 'cinema';
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/post/getPostByCategories/${cinema}`).then((response) => {
            response.json().then((posts) => {
                setPosts(posts);
            });
        });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('cinema-block')}>
                    <p className={cx('cinema-title')}>Cinema</p>
                </div>
                <div className={cx('cinema-contain')}>
                    {posts.length > 0 && posts.map((post) => <Post {...post} classname={cx('post')} />)}
                </div>
            </div>
        </div>
    );
}
