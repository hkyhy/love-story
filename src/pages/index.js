import loadable from '@loadable/component';
import { Spin } from 'antd';

const loadableWithProps = (func) => {
  return loadable(func, {
    fallback: <Spin style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }} />
  });
};

export const pages = {
  Home: loadableWithProps(() => import('./Home')),
  First: loadableWithProps(() => import('./First')),
};
