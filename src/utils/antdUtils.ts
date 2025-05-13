import { MenuItem, SubMenuItem } from '@/constants';
import { TFunction } from 'i18next';
import { MenuProps } from 'antd';
import { ReactNode } from 'react';
import { uniqueId } from 'lodash';

type AntdMenuItem = Required<MenuProps>['items'][number];

const buildMenuItem = (label: ReactNode, children?: AntdMenuItem[]): AntdMenuItem => {
  return {
    key: uniqueId(),
    children,
    label,
  } as AntdMenuItem;
};

export const toAntdMenuItems = (
  items: MenuItem[] | SubMenuItem[] | undefined,
  t: TFunction,
): AntdMenuItem[] | undefined => {
  return items?.map((menuItem: MenuItem) =>
    buildMenuItem(t(menuItem.title), toAntdMenuItems(menuItem.children, t)),
  );
};
