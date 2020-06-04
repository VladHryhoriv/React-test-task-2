import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    display: flex;
	flex-direction: column;
	justify-content: top;
	background: #454545;
	flex: 0 0 auto;
	align-items: center;
    padding: 1.5% 0;
`;

const Link = styled.a`
    color:white;
    text-decoration:none;
`;

const Footer = props => {
    return (
        <FooterWrapper>
            <Link href="https://uk.wikipedia.org/wiki/GitHub">About Git</Link>
        </FooterWrapper>
    );
};


export default Footer;