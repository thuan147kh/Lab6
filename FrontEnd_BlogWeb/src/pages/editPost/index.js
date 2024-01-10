import { useParams, Navigate } from 'react-router-dom';
import styles from './editPost.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Editor from '~/Editor';
import axios from 'axios';

const cx = classNames.bind(styles);

export default function EditPost() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [categories, setCategories] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    // const [cover, setCover] = useState('');
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        axios
            .get(`http://localhost:3000/post/getPost/${id}`)
            .then((response) => {
                setTitle(response.data.title);
                setCategories(response.data.categories);
                setContent(response.data.content);
            })
            .catch((error) => {
                console.error('Error fetching post:', error);
            });
    }, [id]);

    async function updatePost(ev) {
        ev.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('categories', categories);
        data.set('content', content);
        data.set('id', id);
        if (files?.[0]) {
            data.set('file', files?.[0]);
        }
        try {
            const response = await axios.put(`http://localhost:3000/post/updatePost`, data, {
                withCredentials: true,
            });
            if (response.status === 200) {
                alert('Post updated successfully!');
                setRedirect(true);
            }
        } catch (error) {
            console.error('Error updating post:', error);
        }
    }
    if (redirect) {
        return <Navigate to={`/post/${id}`} />;
    }
    return (
        <div className={cx('edit-wrapper')}>
            <div className={cx('edit-inner')}>
                <form onSubmit={updatePost} className={cx('edit')}>
                    <input
                        className={cx('edit-create')}
                        type="title"
                        placeholder={'Title'}
                        value={title}
                        onChange={(ev) => setTitle(ev.target.value)}
                    />
                    <input
                        className={cx('edit-create')}
                        type="category"
                        placeholder={'Categories'}
                        value={categories}
                        onChange={(ev) => setCategories(ev.target.value)}
                    />
                    <input className={cx('input-file')} type="file" onChange={(ev) => setFiles(ev.target.files)} />
                    <Editor className={cx('content')} onChange={setContent} value={content} />
                    <button className={cx('button')}>Update Post</button>
                </form>
            </div>
        </div>
        ////
    );
}
