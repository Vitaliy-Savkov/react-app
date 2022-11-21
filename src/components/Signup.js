import { useState } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
    color: #163A24;
    font-family: 'Noto Sans';
    font-weight: 400;
    font-style: normal;
    display: flex;
    justify-content: space-around;
    margin: 60px 0 73px 0;
`

const FormContainer = styled.div`
    & > form {
        display: flex;
    }    

    & > form input {
        background: #FFFFFF;
        font-size: 18px;
        border: 1px solid #F2EFE6;
        border-radius: 255px;
        display: inline-block;
        padding-right: 50px;
        width: 553px;
        height: 54px;
    }

    & > p {
        font-size: 14px;
        line-height: 21px;
        text-align: start;
    }

    & > p a {
        color: #198C36;
    }
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;

    & > h2 {
        font-family: 'Recoleta';
        font-weight: 600;
        font-size: 48px;
        line-height: 54px;
        margin: 0 0 10px 0;
    }

    & > p {
        font-size: 18px;
        line-height: 27px;
    }
`

const Button = styled.button`
    background-color: #198C36;
    color: #FBFAF7;
    border-radius: 160px;
    cursor: pointer;
    width: 111px;
    padding: 15px 25px;
    margin-left: -70px;
`

const Signup = () => {
  const [email, setEmail] = useState('');    

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  }

  return (
    <Container>
        <ContentContainer>
            <h2>Stay up to date!</h2>
            <p>Sign up for the latest Clerksy news.</p>
        </ContentContainer>
        <FormContainer>    
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={handleEmailInput} />
                <Button>Sign Up</Button>
            </form>
            <p>
                By submitting your email you agree to receive updates about Clerksy.
                You can<br/> unsubscribe at any time. View our full <a>Privacy Policy</a>
            </p>
        </FormContainer>
    </Container>
  );
};

export default Signup;
