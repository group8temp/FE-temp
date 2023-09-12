import { NAVIGATION_PATH, SIGNIN_FORM_TEXT } from "constants/index";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "styles/index"

export const SignUp = () => {
    return (
        <SignUpContainer>
            <CheckIdText>{SIGNIN_FORM_TEXT.haveNotIdText}</CheckIdText>
            <Link {...NAVIGATION_PATH.navigatorSignUpPage}>
            <SignUpLink>{SIGNIN_FORM_TEXT.signUpText}</SignUpLink>
            </Link>
        </SignUpContainer>
    )
}

const SignUpContainer = styled.div`
    position: relative;
    top: 30%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`


const CheckIdText = styled.div`
    height: 17px;
    font-size: 14px;
    font-weight: 400px;
    color: ${theme.greyScale.grey7};
`

const SignUpLink = styled.div`
    margin: 0 10px;
    font-size: 14px;
    height: 17px;
    color: ${theme.main.blue0};
    text-align: center;
`


const CheckIdText = styled.div`
    width: 159px;
    height: 17px;
    font-size: 14px;
    font-weight: 400px;
    color: ${theme.greyScale.grey7};
`

const SignUpLink = styled.div`
    margin: 0 10px;
    height: 17px;
    color: ${theme.main.blue0};
    text-align: center;
`


const CheckIdText = styled.div`
    width: 159px;
    height: 17px;
    font-size: 14px;
    font-weight: 400px;
    color: ${theme.greyScale.grey7};
`

const SignUpLink = styled.div`
    margin: 0 10px;
    height: 17px;
    color: ${theme.main.blue0};
    text-align: center;
`
