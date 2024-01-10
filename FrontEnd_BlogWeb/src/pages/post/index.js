import { Link, useParams } from 'react-router-dom';
import styles from './Post.module.scss';
import classNames from 'classnames/bind';
import { AimOutlined } from '@ant-design/icons';
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '~/UserContext';
import axios from 'axios';
const cx = classNames.bind(styles);

export default function Post({ _id, title, categories, cover, content, author }) {
    const [postInfo, setPostInfo] = useState(null);
    const { setUserInfo, userInfo } = useContext(UserContext);
    const { id } = useParams();
    // useEffect(() => {
    //     axios
    //         .get(`http://localhost:3000/post/getPost/${id}`)
    //         .then((response) => {
    //             setPostInfo(response.data);
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching post:', error);
    //         });
    // }, [id]);
    // useEffect(() => {
    //     axios
    //         .get('http://localhost:3000/post/profile', { withCredentials: true })
    //         .then((response) => {
    //             setUserInfo(response.data);
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching user profile:', error);
    //         });
    // }, []);
    // if (!postInfo) return '';
    return (
        <div className={cx('wrapper')}>
            <div className={cx('post')}>
                <Link to={`/post/${_id}`}>
                    <img src={'http://localhost:3000/static/' + cover}></img>
                </Link>
            </div>

            <div className={cx('info')}>
                <div className={cx('image')}>
                    <img src="https://secure.gravatar.com/avatar/634c7a08ee41b1a61c797010f90c60a3?s=70&d=mm&r=g" />
                    {/* <div className={cx('name-author')}>{postInfo} </div> */}
                </div>
                <div className={cx('Title')}>
                    <h2 className={cx('title')}>{title}</h2>
                </div>
            </div>
        </div>
    );
}
