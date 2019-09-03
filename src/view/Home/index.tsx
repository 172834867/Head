import * as React from 'react';
const {Content, Header, Sider } = Layout;
import {Icon  ,Layout,Menu} from 'antd';
const { SubMenu } = Menu;

class Router extends React.Component {
    public render() {
       return(
          <div>
              <Layout>
     <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '48px' }}
      >
        <Menu.Item key="1">八维管理系统</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                试卷管理
              </span>
            }
          >
            <Menu.Item key="1">添加试题</Menu.Item>
            <Menu.Item key="2">试题分类</Menu.Item>
            <Menu.Item key="3">查看试题</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="laptop" />
                 用户管理
              </span>
            }
          >
            <Menu.Item key="5">添加用户</Menu.Item>
            <Menu.Item key="6">用户处理</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="notification" />
                考试管理
              </span>
            }
          >
            <Menu.Item key="7">添加考试</Menu.Item>
            <Menu.Item key="8">试题列表</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="notification" />
                班级管理
              </span>
            }
          >
            <Menu.Item key="9">班级管理</Menu.Item>
            <Menu.Item key="10">教室管理</Menu.Item>
            <Menu.Item key="11">学生管理</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub5"
            title={
              <span>
                <Icon type="notification" />
                阅卷管理
              </span>
            }
          >
            <Menu.Item key="12">待批班级</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Content
          style={{
            border:'1px solide #ccc',
            margin: 0,
            minHeight: 480,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>
          </div>
      )
    }
}
export default Router