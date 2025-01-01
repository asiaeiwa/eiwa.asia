import { mapClassnames, mapModifiers } from 'libs/component';
import { FC } from 'react';
import styles from './style.module.scss';
import { Image } from 'components/image';
import { Button } from 'components/button';
import { Icon } from 'components/icon';
import { Container } from 'components/container';
import { Link } from 'components/link';

interface Props {
  className?: string;
  imgSrc?: string;
  name?: string;
  position?: string;
  email?: string;
  phone?: string;
  social?: {
    facebook?: string;
    linkedin?: string;
    youtube?: string;
    zalo?: string;
    instagram?: string;
    twitter?: string;
    tiktok?: string;
  };
  addContactText?: string;
  phoneText?: string;
}

export const SectionBio: FC<Props> = ({
  className: additionalClassName = '',
  imgSrc,
  name,
  position,
  email,
  phone,
  social,
  addContactText = 'Add Contact',
  phoneText = 'Phone',
}) => {
  const componentClassName = mapModifiers('section-bio', styles);
  const className = mapClassnames(componentClassName, additionalClassName);

  return (
    <section className={className}>
      <Container>
        <div className={styles['section-bio__main-box']}>
          <div className={styles['section-bio__avatar']}>
            <Image
              src={imgSrc || ''}
              width={100}
              height={100}
              layout="responsive"
              modifiers="circle"
              isLazy
              alt={name || ''}
            />
            <Icon modifiers="verify" />
          </div>
          <h2>{name}</h2>
          <h5>{position}</h5>
          <div className={styles['section-bio__connect']}>
            <Button tag="a">
              <Icon modifiers="add-contact" /> {addContactText}
            </Button>
          </div>
        </div>

        <div className={styles['section-bio__info-box']}>
          <dl>
            <dt>{phoneText}</dt>
            <dd>
              <Link href={`tel:${phone?.trim()?.replaceAll(' ', '')}`}>{phone}</Link>
            </dd>
            <dt>Email</dt>
            <dd>
              <Link href={`mailto:${email?.trim()}`}>{email}</Link>
            </dd>
          </dl>
        </div>

        {social && (
          <div className={styles['section-bio__social-box']}>
            {social?.facebook && (
              <Link className={styles['section-bio__social-item']} target="_blank" href={social.facebook}>
                <Icon modifiers="facebook" />
                Facebook
              </Link>
            )}
            {social?.youtube && (
              <Link className={styles['section-bio__social-item']} target="_blank" href={social.youtube}>
                <Icon modifiers="youtube" />
                Youtube
              </Link>
            )}
            {social?.tiktok && (
              <Link className={styles['section-bio__social-item']} target="_blank" href={social.tiktok}>
                <Icon modifiers="tiktok" />
                Tiktok
              </Link>
            )}
            {social?.instagram && (
              <Link className={styles['section-bio__social-item']} target="_blank" href={social.instagram}>
                <Icon modifiers="instagram" />
                Instagram
              </Link>
            )}
            {social?.twitter && (
              <Link className={styles['section-bio__social-item']} target="_blank" href={social.twitter}>
                <Icon modifiers="twitter" />X
              </Link>
            )}
            {social?.linkedin && (
              <Link className={styles['section-bio__social-item']} target="_blank" href={social.linkedin}>
                <Icon modifiers="linkedin" />
                Linkedin
              </Link>
            )}
            {social?.zalo && (
              <Link className={styles['section-bio__social-item']} target="_blank" href={social.zalo}>
                <Icon modifiers="zalo" />
                Zalo
              </Link>
            )}
          </div>
        )}
      </Container>
    </section>
  );
};
