import React from 'react';

export const toggleMenu = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
  const target = event.target as HTMLElement;

  const menuItem = target.closest('.menu-item');

  if (menuItem) {
    const isMenuOpened = menuItem.classList.contains('opened');

    if (isMenuOpened) {
      menuItem.classList.remove('opened');
    } else {
      menuItem.classList.add('opened');
    }
  }
};

export const toggleSubMenu = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
  const target = event.target as HTMLElement;
  const parentMenuItem = target.closest('.sub-menu-item');

  if (parentMenuItem) {
    const subMenu = document.getElementById(`${parentMenuItem.id}-sub-menu`);

    if (subMenu) {
      const isSubMenuOpened = subMenu.classList.contains('opened');

      if (isSubMenuOpened) {
        subMenu.classList.remove('opened');
      } else {
        subMenu.classList.add('opened');
      }
    }

    const menuIcon = parentMenuItem.querySelector('.sub-menu-item__icon');

    if (menuIcon) {
      const htmlMenuIcon = menuIcon as HTMLElement;
      htmlMenuIcon.style.transform = !htmlMenuIcon.style.transform ? 'rotate(90deg)' : '';
    }
  }
};

export const toggleMenuItem = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
  const header = document.querySelector('#header');
  const menuItems = header?.querySelectorAll('.sub-menu-item');

  menuItems?.forEach((item) => {
    item.classList.remove('opened');
  });

  const target = event.target as HTMLElement;
  const menuItem = target?.closest('.sub-menu-item');

  menuItem?.classList.add('opened');
};
