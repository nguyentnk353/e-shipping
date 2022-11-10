import React, { useState } from 'react';
import SideNav, { Toggle, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './UserSidebar.less';
import { useNavigate } from 'react-router';


export const UserSidebar = () => {

    const navigate = useNavigate();

    return <SideNav
    onSelect={selected => {
        console.log(selected)
        navigate('/' + selected)
    }}
    className='usersidenav'
    >
        <SideNav.Toggle disabled='true' expanded='true' />
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="user/home">
                <NavIcon><i className='fa fa-fw fa-home' style={{ fontSize: "1.5em" }}/></NavIcon>
                <NavText className='navtext'>Home</NavText>
            </NavItem>
            <NavItem eventKey="guest/home">
                <NavIcon><i className='fa-solid fa-magnifying-glass' style={{ fontSize: "1.5em" }}/></NavIcon>
                <NavText>Tra cứu vận đơn</NavText>
            </NavItem>
            <NavItem eventKey="create">
                <NavIcon><i class="fa-solid fa-cart-shopping" style={{ fontSize: "1.5em" }}></i></NavIcon>
                <NavText>Tạo vận đơn</NavText>

                <NavItem eventKey="user/create-new-order" color="white">
                    <NavText>Tạo đơn hàng</NavText>
                </NavItem>
                <NavItem eventKey="create-mutiple">
                    <NavText>Tạo đơn nhiều điểm gửi</NavText>
                </NavItem>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
}