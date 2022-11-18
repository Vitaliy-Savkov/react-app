import logo from "../assets/logo.svg";
import styled from "@emotion/styled";

const Button = styled.button`
    background-color: #198C36;
    color: #FBFAF7;
    padding: 15px 25px;
    border-radius: 160px;
    cursor: pointer;
`

const Container = styled.header`
    background-color: #163A24;
    color: #FBFAF7;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.div`
    margin: 20px 130px 20px;

    & > img {
        width: 153px;
        height: 58;
    }
`

const SideBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 25px 140px 21px 0;

    & > a {
        color: #FBFAF7;
        text-decoration: none; 
        padding-right: 24px; 
    }
`

const Header = () => {
    return (
    <Container>
        <Logo>
            <img src={logo} alt="Clerksy"/>
        </Logo>
        <SideBar>
            <a href="#">Log In</a>
            <a href="tel:844-322-6440">844-322-6440</a>
            <Button>Get Started</Button>
        </SideBar>
    </Container>
    );
}

export default Header;