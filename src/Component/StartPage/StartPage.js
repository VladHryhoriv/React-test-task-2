import React from 'react';
import styled from 'styled-components';

const StartWrapper = styled.div`
    background-image:url(../photos/download.png);
    height:100%;
`;

const StartPage = props => {
    return (
        <StartWrapper>
           Це відкритий код GitHub
        </StartWrapper>
    );
};


export default StartPage;