import { Heading } from 'components/heading';
import { mapClassnames, mapModifiers } from 'libs/component';
import { Children, FC, ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './style.module.scss';
import 'swiper/css';

interface Props {
  children?: ReactNode;
  className?: string;
  title: string;
}

export const BlogRelated: FC<Props> = ({ children, className: additionalClassName = '', title }) => {
  const componentClassName = mapModifiers('blog-related', styles);
  const className = mapClassnames(componentClassName, additionalClassName);
  return (
    <div className={className}>
      <Heading tag="h5" className={styles['blog-related__heading']} modifiers="border-inline">
        {title}
      </Heading>
      <div className={styles['blog-related__wrapper-slider']}>
        <Swiper className={styles['blog-related__slider']} slidesPerView="auto" spaceBetween={20}>
          {Children.toArray(children).map((item, index) => (
            <SwiperSlide key={index} className={styles['blog-related__item']}>
              {item}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
