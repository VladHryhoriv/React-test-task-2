import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import styled from 'styled-components';
import Git from '../Git/Git';
import { withSuspense } from '../Common/hoc/hoc';
import Me from '../Common/Me/Me';


const Users = React.lazy(() => import("../Users/Users"));



const MainContain = styled.div`
    flex: 1 0 auto;
`;

const Contain = props => {
    return (
        <MainContain>
            <Route path="/git" render={() => <Git />} />
            <Route path="/me" render={() => <Me />} />
            <Route path="/users" render={withSuspense(Users) } />
            <Redirect from='/' to='/start' />
        </MainContain>
    );
};


export default Contain;