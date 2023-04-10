import {UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home-page';
import ContactDetails from './pages/contact-detail';
const { Header, Content, Footer, Sider } = Layout;
const menus = [{
  key: 1,
  label: "Labizy"
}]
const sideMenus =[ {
    key: 1,
    icon: React.createElement(UserOutlined),
    label: `Contacts`

}];
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />      
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={menus} />
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Acceuil</Breadcrumb.Item>
          <Breadcrumb.Item>Contact</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          style={{
            padding: '24px 0',
            background: colorBgContainer,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
              }}
              items={sideMenus}
            />
          </Sider>
          <Content
            style={{
              padding: '0 24px',
              minHeight: 280,
            }}
          > <Routes>
              <Route path="/" element={ <HomePage/> } />
              <Route path="details/:id" element={ <ContactDetails/> } />
            </Routes>
           
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Labizy ©2023 Created by Babacar
      </Footer>
    </Layout>
  );
};
export default App;