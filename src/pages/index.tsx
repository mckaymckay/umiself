import React, { useState } from 'react';
import { ConfigProvider } from 'antd';
import styles from './index.less'
import FSBTMenu from './menu';




function HomePage() {
  const [user, setUser] = useState('陶家乐112')
  return (
    <div>indexpage</div>
  );
};

export default HomePage;