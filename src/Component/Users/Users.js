import React, { useEffect, useState } from 'react';
import { SetUserThunk } from './userSlice';
import Preloader from '../Common/Preloader';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Paginator } from '../Common/Paginator';

const WrapperUsers = styled.div`
    width:100%;
    display:flex;
    flex-wrap: wrap;
    flex-direction:column;
    min-height:100%;
    justify-content: space-between;
`; 
const User = styled.div`
    flex-wrap:wrap;
`;
const UserPhoto = styled.img`
    width:184px;
    height:184px;
`;
const UserName = styled.div`
    width:100%;
    font-size:20px;
    font-family: 'Lexend Tera', sans-serif;
    text-decoration:none;
`;
const NavLinkA = styled.a`
    margin: 20px 0;
    text-align: center;
    width: 33%;
    flex-wrap: wrap;
    text-align:center;
    text-decoration:none;
    color:black;
`;
const UsersWrap = styled.div`
    width:100%;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Users = ({users,fetching,...props}) => {
    const [currentPage,setCurrentPage] = useState(1);
    useEffect(()=>{
        props.SetUserThunk()
    })
    return (
        fetching
        ?<Preloader/>
        :<WrapperUsers>
            <UsersWrap>
                {users.map((userItem,index)=>{
                    return (index<9*currentPage && index>=(9*currentPage)-9)?
                    <NavLinkA href={userItem.html_url}>
                        <User>
                            <UserPhoto src={userItem.owner.avatar_url}/>
                            <UserName>{userItem.name}</UserName>
                        </User>
                    </NavLinkA>
                    :""
                } 
                )}
            </UsersWrap>
            <Paginator totalCount={users.length} size={9} currentPage={currentPage} setCurrentPageThunk={setCurrentPage} />
        </WrapperUsers>
    );
};

const mapStateToProps = state => {
    return{
        users:state.users,
        fetching:state.fetching
    }
}

export default compose(
    connect(mapStateToProps, { SetUserThunk })
)(Users);