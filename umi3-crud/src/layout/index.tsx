import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb  } from 'antd';
import styles from './index.scss'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    FileOutlined,
    TeamOutlined
  } from '@ant-design/icons';
import { Link, useHistory } from 'umi'
  
const { Header, Sider, Content } = Layout;

const LayoutFrame = (props: {children: React.ReactNode}) => {
  const { location } = useHistory()
    const [ collapsed, setCollapsed ] = useState(false)

    const toggle = () => {
        setCollapsed(!collapsed)
    }

    return (
        <Layout className={styles.layout}>
        <Sider trigger={null} breakpoint="lg" collapsedWidth="0" collapsible collapsed={collapsed}>
          <div className="title" >管理系统</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]}>
            <Menu.Item key="/course" icon={<FileOutlined />}>
              <Link to='/course'>课程记录</Link> 
            </Menu.Item>
            <Menu.Item key="/about" icon={<TeamOutlined />}>
            <Link to='/about'>关于我们</Link> 
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
            <Breadcrumb style={{ margin: ' 10px 0' }}>
              <Breadcrumb.Item>{location.pathname}</Breadcrumb.Item>
            </Breadcrumb>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '40px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            
            {props.children}
          </Content>
        </Layout>
      </Layout>
    )
}

export default LayoutFrame
