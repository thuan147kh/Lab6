import Header from './Header';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Sidebar from './Sidebar';
import Footer from './Footer';
const cx = classNames.bind(styles);
export default function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('top')}>
                {/* <Header /> */}
                <Sidebar />
            </div>
            <div className={cx('body')}>{children}</div>
            <div className={cx('bottom')}></div>
        </div>
    );
}
