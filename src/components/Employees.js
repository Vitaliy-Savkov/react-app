import emloyeesImg from "../assets/employees.svg";
import styled from "@emotion/styled";


const Container = styled.div`
    background-color: #F2EFE6;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    display: flex;
    align-items: center;
    flex-direction: column;

    & > h2 {
        font-family: 'Recoleta';
        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        line-height: 54px;
        width: 739px;
        margin: 114px 0 27px 0;
    }

    & > p {
        width: 720px;
        margin: 0;
    }
`

const ImgContainer = styled.div`
    margin: 0 0 135px 0;
`

const Employees = () => {
    return (
    <Container>
        <h2>Employees come in all shapes and sizes. Find the right fit.</h2>
        <p>Focus on casting and screening. Let Clerksy handle contracts,
            resolve any on set-conflicts and make sure you are compliant with work and safety boards.
        </p>
        <ImgContainer>
            <img src={emloyeesImg} />
        </ImgContainer>
    </Container>
    );
}

export default Employees;