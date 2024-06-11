import { ReactNode } from 'react';

export const ASIAEIWA = 'ASIA EIWA CO.,LTD';
export const ASIAEIWA_EMAIL = 'contact@eiwa.asia';
export const ASIAEIWA_GEO =
  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15677.524476742636!2d106.7061595!3d10.7820942!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x39e82b512865d3db!2sAsia%20Eiwa%20Co.%2C%20Ltd!5e0!3m2!1sen!2s!4v1635215040745!5m2!1sen!2s';
export const SEO = {
  description:
    'Let EIWA make technology easy for you. By providing software solutions and meeting the technology needs of businesses, EIWA promises to fully meet the needs of businesses, and at the same time bring valuable digital values.',
  keywords: 'EIWA, techology, digital technology, solution, system.',
  GAID: 'G-XY6H48Q00Z',
};

export type DropdownValuesType = string | number;

export interface DropdownItem {
  label: string | ReactNode;
  value: DropdownValuesType;
  onClick?: (value: DropdownValuesType) => void;
  disabled?: boolean;
}

export const langSupport: DropdownItem[] = [
  { label: 'English', value: 'en' },
  { label: '日本', value: 'ja' },
  { label: 'Tiếng Việt', value: 'vi' },
];

export interface MenuItem {
  key: string;
  href: string;
  title: string;
  target?: string;
}

export const MenuList = [
  { key: 'home', title: 'Home', href: '/' },
  { key: 'about', title: 'About', href: '/about' },
  // { key: 'product', title: 'Product', href: '/product' },
  { key: 'service', title: 'Services', href: '/service' },
  // { key: 'team', title: 'Team', href: '/team' },
  { key: 'blog', title: 'Blog', href: 'https://elearning.eiwa.asia/blog/', target: '_blank' },
  { key: 'career', title: 'Career', href: '/career' },
  { key: 'contact', title: 'Contact', href: '/contact' },
];
