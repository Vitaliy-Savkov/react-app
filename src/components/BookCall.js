import leftSideLeafsImg from "../assets/book-call/leftside-leafs.svg";
import rightSideLeafsImg from "../assets/book-call/rightside-leafs.svg";

import styled from "@emotion/styled";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #163A24;
    color: #FBFAF7;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 600;
    text-align: center;
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > h2 {
        margin: 0;
        font-family: 'Recoleta';
        font-size: 48px;
        line-height: 54px;
    }

    & > p {
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
    }
`

const Button = styled.button`
    padding: 15px 25px;
    background: #FAB5A0;
    color: #163A24;
    font-size: 16px;
    line-height: 22px;
    border-radius: 160px;
    cursor: pointer;
    width: 258px;
`

const BookCall = () => {
    return (
    <Container>
        <img src={leftSideLeafsImg} />
        <ContentContainer>
            <h2>Get Started With Clerksy</h2>
            <p>Make sure your business puts people first.</p>
            <Button>Book a Free Discovery Call</Button>
        </ContentContainer>
        <img src={rightSideLeafsImg} />
    </Container>
    );
}

export default BookCall;