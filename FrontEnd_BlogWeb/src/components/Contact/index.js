import styles from './Contact.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(styles);
function Contact() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('contact')}>
                <h2>Contact us........</h2>
                <div className={cx('button')}>
                    <button>
                        <a href="https://www.facebook.com/sy.cung.7">
                            <FontAwesomeIcon icon={faFacebook} style={{ color: '#000000' }} />
                        </a>
                    </button>
                    <button>
                        <a href="https://www.instagram.com/">
                            <FontAwesomeIcon icon={faInstagram} style={{ color: '#000000' }} />
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Contact;
