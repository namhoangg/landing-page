import { useTranslation } from 'react-i18next';
import { SubMenuItem } from '@/constants';
import React from 'react';
import { uniqueId } from 'lodash';
import { toggleMenuItem } from '../utils';
import { selectMenuItem, useCommonDispatch, useCommonSelector } from '@/redux';
import { ChevronRightIcon } from '@/components';
import { useRouter } from 'next/navigation';

type SubMenuProps = {
  parentID: string;
  items: SubMenuItem[];
  isTabletOrLess: boolean;
};

type SubMenuItemProps = {
  item: SubMenuItem;
  isTabletOrLess: boolean;
};

const SubMenuItem = ({ item, isTabletOrLess }: SubMenuItemProps) => {
  const { t } = useTranslation();
  const { selectedId } = useCommonSelector((state) => state.menuReducer);
  const dispatch = useCommonDispatch();
  const router = useRouter();

  const toggleAnsSelectMenuItem = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    toggleMenuItem(event);
    dispatch(selectMenuItem(item.title));
    item.path && router.push(item.path);
  };

  return (
    <li
      id={item.title}
      key={uniqueId()}
      className={`sub-menu-item sub-menu-item--lv2 
        ${isTabletOrLess ? 'sub-menu-item--mobile' : ''}
        ${item.main ? 'sub-menu-item__main' : ''} 
        ${selectedId === item.title ? 'opened' : ''}`}
      onClick={toggleAnsSelectMenuItem}
    >
      <span className='sub-menu-item__label'>{t(item.title)}</span>
      {item.main && (
        <ChevronRightIcon
          className='sub-menu-item__icon'
          width={16}
          height={16}
        />
      )}
    </li>
  );
};

export const SubMenu = ({ items, parentID, isTabletOrLess }: SubMenuProps) => {
  if (items.length === 0) return null;

  return (
    <ul
      id={`${parentID}-sub-menu`}
      className={`sub-menu sub-menu--lv2 ${isTabletOrLess ? 'sub-menu--mobile' : ''}`}
    >
      {items.map((subChild) => (
        <SubMenuItem
          item={subChild}
          key={uniqueId()}
          isTabletOrLess={isTabletOrLess}
        />
      ))}
    </ul>
  );
};
