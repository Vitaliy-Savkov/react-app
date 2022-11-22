import documentsImg from "../assets/quality/documents.svg";
import educationImg from "../assets/quality/education.svg";
import faceImg from "../assets/quality/face.svg";
import protectionImg from "../assets/quality/protection.svg";

import styled from "@emotion/styled";

const Container = styled.div`
    background-color: #163A24;
    color: #FBFAF7;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    display: flex;
    flex-direction: column;

    & > h2 {
        font-family: 'Recoleta';
        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        line-height: 54px;
        margin-bottom: 67px;
        margin-top: 67px;
    }
`

const ImagesContainer = styled.div`
    margin: 0 219px 140px 230px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`


const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    justify-content: center;

    & > p {
        width: 198px;
        margin-left: -55px
    }
`

const Quality = () => {
    return (
    <Container>
        <h2>HR Production of the Highest Quality</h2>
        <ImagesContainer>
            <ImgContainer>
                <img src={educationImg} height="145px" width="117px" />
                <p>Educates & Informs Employee Expectations</p>
            </ImgContainer>
            <ImgContainer>
                <img src={protectionImg} height="157px" width="79px" />
                <p>Protects Your Business Just in Case</p>
            </ImgContainer>
            <ImgContainer>
                <img src={documentsImg} height="145px" width="66px" />
                <p>Manages & Stores Important Documents</p>
            </ImgContainer>
            <ImgContainer>
                <img src={faceImg} height="149px" width="94px" />
                <p>Create a Healthy Work Environment</p>
            </ImgContainer>
        </ImagesContainer>
        
    </Container>
    );
}

export default Quality;