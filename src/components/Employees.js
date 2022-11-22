import employeesImg from "../assets/employees/employees.svg";

import styled from "@emotion/styled";


const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 114px 130px 135px 130px;
    background-color: #F2EFE6;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;

    & > h2 {
        margin: 0 0 27px 0;
        font-family: 'Recoleta';
        font-weight: 600;
        font-size: 48px;
        line-height: 54px;
        width: 739px;
    }

    & > p {
        margin: 0;
        width: 720px;
    }
`

const Employees = () => {
    return (
    <Container>
        <h2>Employees come in all shapes and sizes. Find the right fit.</h2>
        <p>Focus on casting and screening. Let Clerksy handle contracts,
            resolve any on set-conflicts and make sure you are compliant with work and safety boards.
        </p>
        <img src={employeesImg} />
    </Container>
    );
}

export default Employees;