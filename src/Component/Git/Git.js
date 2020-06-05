import React from 'react';
import styled from 'styled-components';

const StartWrapper = styled.div`
    display:flex;
    flex-direction:row;
    background-image:url(../photos/download.png);
    min-height:100%;
`;
const Text = styled.div`
    margin:30px 0;
    font-size:20px;
    text-decoration:none;
    color:black;
`;
const Photo = styled.div`
    width:100%;
    margin:30px;
    img{
        width:250px;
        height:250px;
    }
`;

const Git = props => {
    return (
        <StartWrapper>
            <Photo>
                <img src={require('../../photos/git.png')}alt="NoImg"/>
            </Photo>
            <Text>
                GitHub — один з найбільших веб-сервісів для спільної розробки програмного забезпечення. Існують безкоштовні 
                та платні тарифні плани користування сайтом. Базується на системі керування версіями Git і розроблений на Ruby 
                on Rails і Erlang компанією GitHub, Inc (раніше Logical Awesome).
                Сервіс безкоштовний для проектів з відкритим вихідним кодом, з наданням користувачам усіх своїх 
                можливостей (включаючи SSL), а для окремих індивідуальних проектів пропонуються різні платні тарифні плани.
            </Text>
        </StartWrapper>
    );
};


export default Git;