import footerLogoImg from "../assets/footer/footer-logo.svg";
import fbImg from "../assets/footer/fb.svg";
import twitterrImg from "../assets/footer/twitter.svg";
import linkedinImg from "../assets/footer/linkedin.svg";
import instagramImg from "../assets/footer/instagram.svg";
import styled from "@emotion/styled";

const Container = styled.footer`
    background: #E5E5E5;
    color: #163A24;
    display: flex;
    flex-direction: column;
`

const LogoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 130px;
    border-bottom: 1px solid #F2EFE6;

    & > h4 {
        font-family: 'Recoleta';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
    }
`

const SocialMediaContainer = styled.div`
    display: flex;

    & > a {
        margin-left: 14px;
    }
`

const CopyrightContainer = styled.div`
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 130px;
`

const LinksContainer = styled.div`
    color: #198C36;
    display: flex;
    
    & > a {
        color: #198C36;
        text-decoration: none;
        margin-left: 14px;
    }
`

const Footer = () => {
    return (
        <Container>
            <LogoContainer>
                <img src={footerLogoImg} />
                <h4>A people company.</h4>
                <SocialMediaContainer>
                    <a href="https://www.facebook.com/" target={`_blank`}><img src={fbImg} /></a>
                    <a href="https://twitter.com/i/flow/login" target={`_blank`}><img src={twitterrImg} /></a>
                    <a href="https://www.linkedin.com/" target={`_blank`}><img src={linkedinImg} /></a>
                    <a href="https://www.instagram.com/" target={`_blank`}><img src={instagramImg} /></a>
                </SocialMediaContainer>
            </LogoContainer>
            <CopyrightContainer>
                <p>© 2020 Clerksy, Inc. Clerksy is a registered trademark of Clerksy, Inc.</p>
                <LinksContainer>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">GDPR</a>
                    <a href="#">Careers</a>
                    <a href="#">Press Kit</a>
                </LinksContainer>
            </CopyrightContainer>
        </Container>
    );
}

export default Footer;