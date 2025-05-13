import { MenuItem } from '@/constants';
import { Col, Row } from 'antd';
import { uniqueId } from 'lodash';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

type NavProps = {
  items: MenuItem[];
  isMobile: boolean;
};

type NavItemProps = {
  item: MenuItem;
};

const NavItem = ({ item }: NavItemProps) => {
  const { t } = useTranslation();

  return (
    <>
      {item.path ? (
        <Link
          href={item.path!}
          className='nav-title'
        >
          {t(item.title)}
        </Link>
      ) : (
        <p className='nav-title'>{t(item.title)}</p>
      )}

      <ul className='nav-items'>
        {item.children &&
          item.children
            .filter((child) => item.path !== child.path)
            .map((child) =>
              child.type === 'external' ? (
                <p
                  className='nav-item'
                  key={uniqueId()}
                  onClick={() => window.open(child.path, '_blank')}
                >
                  {t(child.title)}
                </p>
              ) : (
                <li
                  className={`nav-item ${child.isLarge ? 'is-large' : ''}`}
                  key={uniqueId()}
                >
                  <Link href={child.path!}>{t(child.title)}</Link>
                </li>
              ),
            )}
      </ul>
    </>
  );
};

export const Nav = ({ items }: NavProps) => {
  return (
    <Row>
      {items.map((item, index) => (
        <Col
          xs={index === 0 ? 24 : index === 1 ? 14 : 10}
          sm={index === 0 ? 24 : index === 1 ? 14 : 10}
          md={8}
          key={uniqueId()}
        >
          <NavItem item={item} />
        </Col>
      ))}
    </Row>
  );
};
