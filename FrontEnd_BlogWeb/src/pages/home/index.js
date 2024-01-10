import { useState, useEffect } from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { AnimatePresence, motion } from 'framer-motion';
import Swiper from '~/components/Layout/Slideshow/Slider';
import Post from '~/pages/post';
import { Link } from 'react-router-dom';
import axios from 'axios';
const cx = classNames.bind(styles);

export default function Home() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
            .get(`http://localhost:3000/post/getPost`)
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    });
    return (
        <div className="wrapper">
            <div className={cx('inner')}>
                <div className={cx('contain')}>
                    {posts.length > 0 && posts.map((post) => <Post {...post} classname={cx('post')} />)}
                </div>
            </div>
        </div>
    );
}
