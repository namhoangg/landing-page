import { MouseEventHandler } from 'react';

export interface MenuItem {
  title: string;
  path?: string;
  type: 'link' | 'button' | 'group' | 'external';
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  children?: SubMenuItem[];
  isLarge?: boolean;
}

export interface SubMenuItem extends MenuItem {
  main?: boolean;
}

const ServicesMenu: MenuItem = {
  title: 'navigation.services.self',
  path: '#',
  type: 'group',
  children: [
    {
      title: 'navigation.services.main',
      path: '#',
      type: 'link',
      main: true,
    },
    {
      title: 'Service A',
      path: '#',
      type: 'link',
    },
  ],
};

const ServicesFooterMenu: MenuItem = {} as MenuItem;

const ResourcesMenu: MenuItem = {
  title: 'navigation.resources.self',
  path: '#',
  type: 'group',
  children: [
    {
      title: 'navigation.resources.main',
      path: '#',
      type: 'link',
      main: true,
    },
    {
      title: 'Some Resource',
      path: '#',
      type: 'link',
    },
    {
      title: 'Some Resource',
      path: '#',
      type: 'link',
    },
  ],
};

const CompanyMenu: MenuItem = {
  title: 'navigation.company.self',
  path: '#',
  type: 'group',
  children: [
    {
      title: 'navigation.company.about',
      path: '#',
      type: 'link',
    },
    {
      title: 'navigation.company.contact',
      path: '#',
      type: 'link',
    },
  ],
};

const CompanyFooterMenu: MenuItem = {
  title: 'navigation.company.self',
  path: '#',
  type: 'group',
  children: [
    {
      title: 'navigation.company.about',
      path: '#',
      type: 'link',
    },
    {
      title: 'navigation.company.mediaCenter.main',
      path: '#',
      type: 'link',
    },
  ],
};

const SupportMenu: MenuItem = {
  title: 'navigation.support.support',
  path: '#',
  type: 'group',
  children: [
    {
      title: 'navigation.support.privacyPolicy',
      path: '#',
      type: 'link',
    },
    {
      title: 'navigation.support.contactUs',
      path: '#',
      type: 'link',
    },
    {
      title: 'navigation.support.faqs',
      path: '#',
      type: 'link',
    },
  ],
};

export const headerNavList: MenuItem[] = [ServicesMenu, ResourcesMenu, CompanyMenu];

export const footerNavList: MenuItem[] = [ServicesFooterMenu, CompanyFooterMenu, SupportMenu];
