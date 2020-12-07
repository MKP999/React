import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import styles from './index.scss';
import { MenuUnfoldOutlined, MenuFoldOutlined, FileOutlined, TeamOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'umi';
const { Header, Sider, Content } = Layout;
const LayoutFrame = (props) => {
    const { location } = useHistory();
    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => {
        setCollapsed(!collapsed);
    };
    return (React.createElement(Layout, { className: styles.layout },
        React.createElement(Sider, { trigger: null, breakpoint: "lg", collapsedWidth: "0", collapsible: true, collapsed: collapsed },
            React.createElement("div", { className: "title" }, "\u7BA1\u7406\u7CFB\u7EDF"),
            React.createElement(Menu, { theme: "dark", mode: "inline", defaultSelectedKeys: [location.pathname] },
                React.createElement(Menu.Item, { key: "/course", icon: React.createElement(FileOutlined, null) },
                    React.createElement(Link, { to: '/course' }, "\u8BFE\u7A0B\u8BB0\u5F55")),
                React.createElement(Menu.Item, { key: "/about", icon: React.createElement(TeamOutlined, null) },
                    React.createElement(Link, { to: '/about' }, "\u5173\u4E8E\u6211\u4EEC")))),
        React.createElement(Layout, { className: "site-layout" },
            React.createElement(Header, { className: "site-layout-background", style: { padding: 0 } },
                React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: toggle,
                }),
                React.createElement(Breadcrumb, { style: { margin: ' 10px 0' } },
                    React.createElement(Breadcrumb.Item, null, location.pathname))),
            React.createElement(Content, { className: "site-layout-background", style: {
                    margin: '40px 16px',
                    padding: 24,
                    minHeight: 280,
                } }, props.children))));
};
export default LayoutFrame;
//# sourceMappingURL=index.js.map