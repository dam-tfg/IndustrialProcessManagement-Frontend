/**
 * @author Alberto González
 *
 */
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderComponent } from '../components/common/HeaderComponent';
import { FooterComponent } from '../components/common/FooterComponent';
import { SidebarComponent } from '../components/common/sidebar/SidebarComponent';
import { Affix, Layout } from 'antd';

const { Content } = Layout;

export const App = () => {

    return (
        <Layout hasSider >
            <SidebarComponent/>
            <Layout className="site-layout">
                <Affix>
                    <HeaderComponent/>
                </Affix>
                <Content style={{
          margin: '24px 16px 0',
          overflow: 'initial',
        }}>
                    <Outlet/>
                </Content>
                <FooterComponent/>
            </Layout>
        </Layout>
    );
}