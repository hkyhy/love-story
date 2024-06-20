import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout as AntdLayout, ConfigProvider } from 'antd';

import style from './style.module.scss';
import Navigation from '../components/Navigation';

const Layout = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: 'pink'
        }
      }}
    >
      <AntdLayout className={style['layout']}>
        <Navigation
          list={[
            { label: '纸飞机', key: 'home', path: '/' },
            { label: '初遇', key: 'first', path: '/first' }
          ]}
        />
        <div className={style['layout-content']}>
          <Outlet />
        </div>
      </AntdLayout>
    </ConfigProvider>
  );
};

export default Layout;
