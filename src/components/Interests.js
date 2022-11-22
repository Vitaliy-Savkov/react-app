import charactersImg from "../assets/interests/characters.svg";
import guardImg from "../assets/interests/guard.svg";
import magnifierImg from "../assets/interests/magnifier.svg";
import starImg from "../assets/interests/star.svg";

import styled from "@emotion/styled";

const Container = styled.div`
    background-color: #E5E5E5;
    color: #163A24;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: start;

    & > h2 {
        font-family: 'Recoleta';
        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        line-height: 54px;
        text-align: center;
        margin-bottom: 26px;
    }

    & > p {
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        text-align: center;
        margin: 0;
    }
`

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 180px 230px 114px 230px;

`
const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-right: 115px;

    & > h2 {
        font-family: 'Recoleta';
        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        line-height: 54px;
        width: 338px;
        margin-bottom: 27px;
    }

    & > p {
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        width: 379px;
        margin: 0;
    }
`

const InterestsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 18px 130px 120px 130px;

`

const Interest = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 0 0 40px;
    width: 353px;
    background-color: #FBFAF7;
    box-shadow: 5px 5px 20px #E9E4D5;
    border-radius: 15px;


    & > h3 {
        font-family: 'Recoleta';
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 32px;
        margin: 20px 0 23px 0;
    }

    & > ul {
        margin: 0 0 66px 15px;
        padding: 0;
    }

    & > ul li {
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 15px;
    }
`

const Interests = () => {
    return (
    <Container>
        <ImageContainer>
            <DescriptionContainer>
                <h2>How the scenes fit together</h2>
                <p>Employee Training & Development, Diversity<br/> & Inclusion Programs, and Conflict<br/> Resolution.</p>
            </DescriptionContainer>
            <img src={charactersImg} />  
        </ImageContainer>
        <h2>Consider everyone`s best interest</h2>
        <p>HR is for everyone. Clerksy can help you.</p>
        <InterestsContainer>
            <Interest>
                <img src={guardImg} width="62px" />
                <h3>Protect Your<br/> Company</h3>
                <ul>
                    <li>Compliance Audits & Training</li>
                    <li>Employee Data Storage</li>
                    <li>Policy Drafting</li>
                </ul>
            </Interest>
            <Interest>
                <img src={starImg} width="83px" />
                <h3>Set Your Employees<br/> Up For Success</h3>
                <ul>
                    <li>Learning & Development</li>
                    <li>Employee Relations</li>
                    <li>Benefit Management</li>
                    <li>Employee Performance</li>
                </ul>
            </Interest>
            <Interest>
                <img src={magnifierImg} width="82px" />
                <h3>Know Your Industry`s<br/> Legal Landscape</h3>
                <ul>
                    <li>Work Place Investigations</li>
                    <li>Employee Mediations</li>
                    <li>Performance Tracking</li>
                </ul>
            </Interest>
        </InterestsContainer>
    </Container>
    );
}

export default Interests;