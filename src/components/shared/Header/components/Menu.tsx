import { SubMenuItem } from '@/constants';
import { useTranslation } from 'react-i18next';
import { ChevronRightIcon } from '@/components';
import { SubMenu } from './SubMenu';
import React from 'react';
import { uniqueId } from 'lodash';
import { toggleMenuItem, toggleSubMenu } from '../utils';
import { selectMenuItem, useCommonDispatch, useCommonSelector } from '@/redux';
import { useRouter } from 'next/navigation';

type MenuProps = {
  items: SubMenuItem[];
  isTabletOrLess: boolean;
};

type MenuItemProps = {
  item: SubMenuItem;
  isTabletOrLess: boolean;
};

const MenuItem = ({ item, isTabletOrLess }: MenuItemProps) => {
  const { t } = useTranslation();
  const { selectedId } = useCommonSelector((state) => state.menuReducer);
  const dispatch = useCommonDispatch();
  const liRef = React.useRef<HTMLLIElement>(null);
  const router = useRouter();

  const toggleAnsSelectMenuItem = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    toggleMenuItem(event);
    dispatch(selectMenuItem(item.title));
    item.type === 'external'
      ? window.open(item.path, '_blank')
      : item.path && router.push(item.path);
  };

  return (
    <>
      <li
        ref={liRef}
        id={item.title}
        className={`sub-menu-item sub-menu-item--lv1 
          ${isTabletOrLess ? 'sub-menu-item--mobile' : ''}
          ${item.main ? 'sub-menu-item__main' : ''} 
          ${item.children ? 'sub-menu-item__parent' : ''}
          ${selectedId === item.title ? 'opened' : ''}`}
        // onClick={item.children ? toggleSubMenu : toggleAnsSelectMenuItem}
      >
        <span
          className={`sub-menu-item__label ${isTabletOrLess ? 'sub-menu-item__label--mobile' : ''}`}
          onClick={toggleAnsSelectMenuItem}
        >
          {t(item.title)}
        </span>
        {item.main && (
          <ChevronRightIcon
            className='sub-menu-item__icon'
            width={16}
            height={16}
          />
        )}
        {item.children && (
          <i
            className='icon'
            onClick={toggleSubMenu}
          >
            <ChevronRightIcon
              className='sub-menu-item__icon'
              width={16}
              height={16}
            />
          </i>
        )}
      </li>
      <SubMenu
        items={item.children ?? []}
        parentID={item.title}
        isTabletOrLess={isTabletOrLess}
      />
    </>
  );
};

export const Menu = ({ items, isTabletOrLess }: MenuProps) => (
  <ul className={`sub-menu sub-menu--lv1 ${isTabletOrLess ? 'sub-menu--mobile' : ''}`}>
    {items.map((child) => (
      <MenuItem
        item={child}
        key={uniqueId()}
        isTabletOrLess={isTabletOrLess}
      />
    ))}
  </ul>
);
