import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderWrapper = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    border-bottom:2px solid gray;
    align-items:center;
    padding:2%;
`;

const Item = styled.button`
    border:none;
    font-size:20px;
    background:white;
    cursor: pointer;
    background:rgba(0,0,0,0);
    transition:.5s;
    &:hover{
        color:white;
    }
`;

const WrapperLink = styled.div`
    width:50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    transition:.2s;
    a{
        width:30%;
        text-align:center;
    }
`;

const NameOfSite = styled.div`
    font-size:30px;
    width:50%;
    text-align:start;
`;

const Header = props => {
    return (
        <HeaderWrapper>
            <NameOfSite>Git Users</NameOfSite>
            <WrapperLink>
                <NavLink to="/start"><Item>Start</Item></NavLink>
                <NavLink to="/users"><Item>Users</Item></NavLink>
                <NavLink to="/me"><Item>My Account</Item></NavLink>
            </WrapperLink>
        </HeaderWrapper>
    );
};

export default Header;