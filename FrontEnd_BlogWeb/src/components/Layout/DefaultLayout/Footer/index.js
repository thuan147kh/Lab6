import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer>
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('inner-wrap1')}>
                        <div className={cx('about-mannup')}>
                            <h6>ABOUT MANNUP</h6>
                            <p>Chúng tôi nói về cái sướng của đàn ông</p>
                        </div>
                        <div>
                            <a>Facebook</a>
                        </div>
                    </div>
                    <div className={cx('inner-wrap2')}>
                        <h6>SEARCH</h6>
                        <div className={cx('sub-inner-wrap')}>
                            <input 
                                
                                type="text"
                                placeholder="Search..">
                            </input>
                            <button className={cx('icon')}>
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>
                    </div>
                    <div className={cx('inner-wrap3')}>
                    </div>
                </div>
                <div className={cx('footer-lower')}>
                    <div>
                        <p>Thanks for visiting us</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;