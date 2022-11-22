import logo from "../assets/header/logo.svg";

import styled from "@emotion/styled";

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 130px;
    background-color: #163A24;
    color: #FBFAF7;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
`

const Button = styled.button`
    padding: 15px 25px;
    border-radius: 160px;
    cursor: pointer;
    background-color: #198C36;
    color: #FBFAF7;
`

const ContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > a {
        margin-right: 24px;
        text-decoration: none; 
        color: #FBFAF7; 
        
    }
`

const Header = () => {
    return (
    <Container>
        <img src={logo} alt="Clerksy"/>
        <ContentContainer>
            <a href="#">Log In</a>
            <a href="tel:844-322-6440">844-322-6440</a>
            <Button>Get Started</Button>
        </ContentContainer>
    </Container>
    );
}

export default Header;