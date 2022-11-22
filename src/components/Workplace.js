import workplaceImg from "../assets/workplace/workplace.svg";

import styled from "@emotion/styled";

const Container = styled.header`
    background-color: #163A24;
    display: flex;
    justify-content: space-between;
`

const WorkplaceImage = styled.div`
    margin-right: 80px;

    & > img {
        width: 738px;
        height: 580;
    }
`

const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    margin: 120px 0 0 130px;
    color: #FBFAF7; 

    & > p {
        font-family: 'Recoleta';
        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        line-height: 65px;
        text-align: start;
        margin: 0 0 18px 0;
        width: 391px;
    }

    & > p + p {
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
    }
`

const Workplace = () => {
    return (
    <Container>
        <SideBar>
            <p>Running the show has never been so easy.</p>
            <p>
                Ready to put the human back in HR?
                Clerksy helps you set the stage with an inclusive
                and compliant workplace.
            </p>
        </SideBar>
        <WorkplaceImage>
            <img src={workplaceImg} />
        </WorkplaceImage>
    </Container>
    );
}

export default Workplace;