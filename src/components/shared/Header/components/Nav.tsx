import { Button, CloseIcon, MenuBarIcon } from '@/components';
import { MenuItem } from '@/constants';
import { useDocumentSize, useOnClickOutside } from '@/hooks';
import { breakPointValue, color } from '@/styles';
import { uniqueId } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toggleMenu } from '../utils';
import { Menu } from './Menu';
import { usePathname } from 'next/navigation';

type NavItemProps = {
  item: MenuItem;
  isTabletOrLess: boolean;
};

type NavProps = {
  items: MenuItem[];
  isTabletOrLess: boolean;
  isTransparent: boolean;
  setMenuOpened?: (isOpened: boolean) => void;
};

const NavItem = ({ item, isTabletOrLess }: NavItemProps) => {
  const { t } = useTranslation();
  const ref = React.useRef<HTMLLIElement>(null);

  useOnClickOutside(ref, () => {
    const target = ref.current;

    if (target) {
      target.classList.remove('opened');
    }
  });

  return (
    <li
      id={item.title}
      key={uniqueId()}
      ref={ref}
      className={`${item.title} menu-item ${isTabletOrLess ? 'menu-item--mobile' : ''}`}
      {...(!isTabletOrLess && { onMouseEnter: toggleMenu, onMouseLeave: toggleMenu })}
    >
      <span
        className='menu-item__label'
        {...(isTabletOrLess && { onClick: toggleMenu })}
      >
        <span>{t(item.title)}</span>
      </span>
      {item.children && (
        <Menu
          items={item.children}
          isTabletOrLess={isTabletOrLess}
        />
      )}
    </li>
  );
};

export const Nav = ({ items, isTabletOrLess, isTransparent, setMenuOpened }: NavProps) => {
  const ref = React.useRef<HTMLUListElement>(null);
  const pathname = usePathname();
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const { width } = useDocumentSize();

  const toggleMobileMenu = () => {
    const nav = document.querySelector('#header-nav__menu');

    if (nav) {
      const isNavOpened = nav.classList.contains('opened');

      if (isNavOpened) {
        nav.classList.remove('opened');
      } else {
        nav.classList.add('opened');
      }

      setMenuOpened && setMenuOpened(!isNavOpened);
    }

    setIsOpenMobileMenu((prevState) => !prevState);
  };

  useEffect(() => {
    if (isTabletOrLess && document.body.offsetHeight > 0) {
      const header = document.querySelector('#header');

      const headerElement = header as HTMLDivElement;

      const menu = document.querySelector('.header-nav__menu--mobile');

      const menuElement = menu as HTMLUListElement;

      menuElement.style.top = `${headerElement.offsetHeight - 2}px`;
    }
  }, [isTabletOrLess]);

  useEffect(() => {
    setIsOpenMobileMenu(false);
  }, [isTabletOrLess]);

  useEffect(() => {
    setIsOpenMobileMenu(false);

    const nav = document.querySelector('#header-nav__menu');
    if (nav) {
      const isNavOpened = nav.classList.contains('opened');

      if (isNavOpened) {
        nav.classList.remove('opened');
      }
    }
  }, [pathname]);

  return (
    <>
      {isTabletOrLess && (
        <Button
          title='Menu'
          className='header-nav__toggler'
          type='link'
          onClick={toggleMobileMenu}
        >
          {isOpenMobileMenu ? (
            <CloseIcon stroke={isTransparent && width > breakPointValue.XS ? color.WHITE : ''} />
          ) : (
            <MenuBarIcon stroke={isTransparent && width > breakPointValue.XS ? color.WHITE : ''} />
          )}
        </Button>
      )}
      <ul
        id={'header-nav__menu'}
        className={`header-nav__menu ${isTabletOrLess ? 'header-nav__menu--mobile' : ''}`}
        {...(isTabletOrLess && { ref })}
      >
        {items.map((item) => (
          <NavItem
            item={item}
            key={uniqueId()}
            isTabletOrLess={isTabletOrLess}
          />
        ))}
      </ul>
    </>
  );
};
