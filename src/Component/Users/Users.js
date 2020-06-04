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
    justify-content: space-between;
`; 
const User = styled.div`
    width:33%;
    flex-wrap:wrap;
`;
const UserPhoto = styled.img`
    width:150px;
    height:150px;
`;
const Users = ({users,fetching,...props}) => {
    const [currentPage,setCurrentPage] = useState(1);
    useEffect(()=>{
        props.SetUserThunk()
    },[])
    return (
        fetching
        ?<Preloader/>
        :<WrapperUsers>
            {users.map((userItem,index)=>{
                return (index<9*currentPage && index>=(9*currentPage)-9)?
                <User>
                    <UserPhoto src={userItem.owner.avatar_url}/>
                    {userItem.name}
                </User>
                :""
            } 
            )}
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