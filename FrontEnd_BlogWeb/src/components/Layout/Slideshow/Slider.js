import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Slide.module.scss';
import classNames from 'classnames/bind';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const cx = classNames.bind(styles);

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
        <SwiperSlide>
            <img className={cx('img')} src='https://mannup.vn/wp-content/uploads/2015/06/ATN7433_W.jpg'></img>
        </SwiperSlide>
        <SwiperSlide>
            <img className={cx('img')} src='https://mannup.vn/wp-content/uploads/2015/01/46873-500w.jpg'></img>
        </SwiperSlide>
        <SwiperSlide>
            <img className={cx('img')} src='https://mannup.vn/wp-content/uploads/2021/08/220552113_4343025675755579_9019096680561893841_n-640x770.jpg'></img>
        </SwiperSlide>
        <SwiperSlide>
            <img className={cx('img')} src='https://mannup.vn/wp-content/uploads/2015/03/b0eb614c581554a21c842e77caee3fc9.jpg'></img>
        </SwiperSlide>
      
    </Swiper>
  );
};