import { Container } from 'components/container';
import { mapModifiers } from 'libs/component';
import { Children, FC, ReactNode } from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './style.module.scss';
import 'swiper/css';
import 'swiper/css/autoplay';

interface Props {
  className?: string;
  children: ReactNode;
}

export const SectionPartner: FC<Props> = ({ className: additionalClassName = '', children }) => {
  const componentClassName = mapModifiers('section-partner', styles);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <section className={className}>
      <Container className={styles['section-partner__container']}>
        <div className={styles['section-partner__wrapper']}>
          <Swiper
            className={styles['section-partner__slider']}
            modules={[Autoplay]}
            loop
            mousewheel={false}
            draggable={false}
            allowTouchMove={false}
            speed={3000}
            autoplay={{ delay: 0, pauseOnMouseEnter: false, disableOnInteraction: false }}
            slidesPerView="auto"
            breakpoints={{
              0: { spaceBetween: 10 },
              992: { spaceBetween: 94 },
            }}
          >
            {Children.toArray(children).map((item, index) => (
              <SwiperSlide key={index} className={styles['section-partner__item']}>
                {item}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};
