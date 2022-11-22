import rightArrow1Img from "../assets/call/right-arrow1.svg";
import rightArrow2Img from "../assets/call/right-arrow2.svg";
import priceImg from "../assets/call/price.svg";

import styled from "@emotion/styled";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #F2EFE6;
    font-style: normal;
    color: #163A24;
    
    & > h2 {
        font-family: 'Recoleta';
        font-weight: 600;
        font-size: 47px;
        line-height: 54px;
        margin: 114px 0 26px 0;
    }

    & > p {
        font-family: 'Noto Sans';
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        margin: 0 0 50px 0;
    }
`

const DescriptionContainer = styled.div`
    display: flex;
    justify-content: center;

    & > img {
        margin: 0 29px 0 35px;
    }

    & > img + img {
        margin: 0 35px 0 55px;
    }
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > p {
        margin: 0 0 13px 0;
        width: 250px;
    }

    & > h3 {
        margin: 0;
        font-family: 'Recoleta';
        font-weight: 600;
        font-size: 28px;
        line-height: 32px;
    }
`

const Button = styled.button`
    margin-bottom: 222px;
    width: 244px;
    background-color: #198C36;
    color: #FBFAF7;
    padding: 15px 25px;
    border-radius: 160px;
    cursor: pointer;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`

const Call = () => {
    return (
    <Container>
        <h2>It`s easy as 1, 2, 3</h2>
        <p>Clerksy can help use your unique business needs. Here`s how:</p>
        <DescriptionContainer>
            <Description>
                <p>Fill out a form and tell us what you`re looking for:</p>
                <h3>5 minutes</h3>
            </Description>
            <img src={rightArrow1Img} />
            <Description>
                <p>Time it will take a Clerksy rep<br/> to follow up:</p>
                <h3>24 hours</h3>
            </Description>
            <img src={rightArrow2Img} />
            <img src={priceImg} />
        </DescriptionContainer>
        <ButtonContainer>
            <Button>Book Free Discovery Call</Button>
        </ButtonContainer>
    </Container>
    );
}

export default Call;