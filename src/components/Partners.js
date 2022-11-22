import bubbleFemaleImg from "../assets/partners/bubble-female.svg";
import bubbleMaleImg from "../assets/partners/bubble-male.svg";
import aircallImg from "../assets/partners/aircall.svg";
import googleImg from "../assets/partners/google.svg";
import gustoImg from "../assets/partners/gusto.svg";
import notionImg from "../assets/partners/notion.svg";
import stripeImg from "../assets/partners/stripe.svg";

import styled from "@emotion/styled";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 120px 110px;
    background-color: #E5E5E5;
    font-style: normal;
    color: #163A24;
    
    & > h2 {
        margin: 115px 0 70px 0;
        font-family: 'Recoleta';
        font-weight: 600;
        font-size: 48px;
        line-height: 54px;
    }
`

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    padding-right: 118px;

    & > h2 {
        font-family: 'Recoleta';
        font-weight: 600;
        font-size: 48px;
        line-height: 54px;
        margin: 0 0 27px 0;
    }

    & > p {
        font-family: 'Noto Sans';
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        margin: 0;
    }
    
`
const ImageContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px 0 98px;

    & > img {
        margin-right: 100px;
    }
`

const PartnersImagesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 158px;
`

const Partners = () => {
    return (
    <Container>
        <ImageContainer>
            <img src={bubbleFemaleImg} />
            <DescriptionContainer>
                <h2>Put the human back in HR</h2>
                <p>Your employees are the real stars. Show the love and help them perform!</p>
            </DescriptionContainer>
        </ImageContainer>
        <ImageContainer>
            <DescriptionContainer>
                <h2>You don’t have to play all the parts.</h2>
                <p>Sales, accounting, HR— Oh My! You can’t do it all - let Clerksy help.</p>
            </DescriptionContainer>
            <img src={bubbleMaleImg} />
        </ImageContainer>
        <h2>We partner with the best</h2>
        <PartnersImagesContainer>
            <img src={stripeImg} />
            <img src={googleImg} />
            <img src={notionImg} />
            <img src={gustoImg} />
            <img src={aircallImg} />
        </PartnersImagesContainer>
    </Container>
    );
}

export default Partners;