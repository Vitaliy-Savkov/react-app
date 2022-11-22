import bookImg from "../assets/ebook/book.svg";

import styled from "@emotion/styled";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #E5E5E5;
    font-style: normal;
    font-weight: 400;
    text-align: start;
`

const Button = styled.button`
    padding: 15px 25px;
    width: 171px;
    background-color: #198C36;
    color: #FBFAF7;
    font-family: 'Noto Sans'; 
    font-size: 16px;
    line-height: 22px;
    border-radius: 160px;
    border: none;
    cursor: pointer;
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;

    & > h2 {
        margin: 0 132px 0 0;
        font-family: 'Recoleta';
        font-weight: 600;
        font-size: 48px;
        line-height: 54px;
    }

    $ > p {
        font-family: 'Noto Sans';
        font-size: 18px;
        line-height: 27px;
    }
`

const ImageContainer = styled.div`
    margin: 130px 0 135px 0;
`

const Ebook = () => {
    return (
    <Container>
        <ContentContainer>
            <h2>Not just another<br/> HR resource.</h2>
            <p>Simple. Entertaining. Informative.</p>
            <Button>Download E-book</Button>
        </ContentContainer>
        <ImageContainer>
            <img src={bookImg} />
        </ImageContainer>
    </Container>
    );
}

export default Ebook;