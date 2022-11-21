import bubbleFemaleImg from "../assets/bubble-female.svg";
import bubbleMaleImg from "../assets/bubble-male.svg";
import aircallImg from "../assets/aircall.svg";
import googleImg from "../assets/google.svg";
import gustoImg from "../assets/gusto.svg";
import notionImg from "../assets/notion.svg";
import stripeImg from "../assets/stripe.svg";

import styled from "@emotion/styled";

const Container = styled.div`
    background-color: #E5E5E5;
    font-family: 'Recoleta';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 54px;
    color: #163A24;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > p {
        margin: 115px 0 66px 0;
    }
`

const FemaleImgContainer = styled.div`
    margin: 130px 99px 0 0;
`

const MaleImgContainer = styled.div`
    margin: 0 0 0 119px;
`
const DescriptionContainer = styled.div`
    margin-top: ${props => props.male ? "80px" : "268px"};
    width: 380px;
    text-align: start;

    & > p {
        margin-bottom: 27px;
    }

    & > p + p {
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
    }
`
const ImgWrapper = styled.div`
    display: flex;
    justify-content: ${props => props.end ? "flex-end" : "flex-start"};
    flex-direction: ${props => props.row ? "row" : "row-reverse"};
    margin-left: 229px;
`

const PartnersImagesContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0 272px 0 272px;
`

const Partners = () => {
    return (
    <Container>
        <ImgWrapper row>
            <FemaleImgContainer>
                <img src={bubbleFemaleImg} />
            </FemaleImgContainer>
            <DescriptionContainer>
                <p>Put the human back in HR</p>
                <p>Your employees are the real stars. Show the love and help them perform!</p>
            </DescriptionContainer>
        </ImgWrapper>
        <ImgWrapper end>
            <MaleImgContainer>
                <img src={bubbleMaleImg} />
            </MaleImgContainer>
            <DescriptionContainer male>
                <p>You don’t have to play all the parts.</p>
                <p>Sales, accounting, HR— Oh My! You can’t do it all - let Clerksy help.</p>
            </DescriptionContainer>
        </ImgWrapper>
        <p>We partner with the best</p>
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