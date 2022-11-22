import workplaceImg from "../assets/workplace/workplace.svg";

import styled from "@emotion/styled";

const Container = styled.div`
    display: flex;
    justify-content: space-between;    
    background-color: #163A24;
    padding: 0 40px 0 130px;
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: start;
    font-style: normal;
    color: #FBFAF7; 

    & > h2 {
        margin: 120px 200px 18px 0;
        font-family: 'Recoleta';
        font-weight: 600;
        font-size: 48px;
        line-height: 65px;
    }

    & > p {
        margin-right: 200px;
        font-family: 'Noto Sans';
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
    }
`

const Workplace = () => {
    return (
    <Container>
        <ContentContainer>
            <h2>Running the show has never been so easy.</h2>
            <p>Ready to put the human back in HR?Clerksy helps you set the stage with an inclusive and compliant<br/> workplace.</p>
        </ContentContainer>
        <img src={workplaceImg} />
    </Container>
    );
}

export default Workplace;