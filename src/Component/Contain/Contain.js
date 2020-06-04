import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import styled from 'styled-components';
import StartPage from '../StartPage/StartPage';
import { withSuspense } from '../Common/hoc/hoc';


const Users = React.lazy(() => import("../Users/Users"));



const MainContain = styled.div`
    flex: 1 0 auto;
`;

const Contain = props => {
    return (
        <MainContain>
            <Route path="/start" render={() => <StartPage />} />
            <Route path="/users" render={withSuspense(Users) } />
            <Redirect from='/' to='/start' />
        </MainContain>
    );
};


export default Contain;