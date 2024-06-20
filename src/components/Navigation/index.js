import React from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

import style from './style.module.scss';

const { Header } = Layout;

const Navigation = ({ list = [] }) => {
  const navigate = useNavigate();
  const pathNameSplit = window.location.pathname.replace(new RegExp(`^/`), '').split('/');
  const pathModuleName = pathNameSplit[pathNameSplit.length - 1] || 'home';

  return (
    <div className={style['navigation-wrap']}>
      <Header className={style['navigation']} style={{ display: 'flex', alignItems: 'center' }}>
        <Menu
          defaultActiveFirst
          className={style['navigation-menu']}
          activeKey={pathModuleName}
          defaultSelectedKeys={pathModuleName}
          mode="horizontal"
          items={list.map(item =>
            Object.assign({}, item, {
              onClick: () => {
                setTimeout(() => {
                  navigate(item.path);
                }, 0);
              }
            })
          )}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
    </div>
  );
};

export default Navigation;
