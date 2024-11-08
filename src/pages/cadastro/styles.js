import styled from "styled-components";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';

export const Container = styled.main`
    width: 100%; 
    max-width: 80%; 
    margin: 0 auto; 
    margin-top: 80px;

    display: flex; 
    flex-direction: row; 
    justify-content: space-between; 
    align-items: center;
`
export const Wrapper = styled.div`
    max-width: 300px;
    margin-left: 200px;
`
export const Column = styled.div`
    flex: 1;
`
export const Row = styled.div` 
    display: flex; 
    flex-direction: column; 
    justify-content: space-between; 
    align-items: flex-start; 
    margin-top: 20px;

    .account-text {
    font-weight: bold;
    }

    a.login-link { 
        color: #23DD7A; 
        font-weight: bold;
    }
`
export const Title = styled.h2` 
    font-family: 'Open Sans'; 
    font-style: normal; 
    font-weight: 700; 
    font-size: 32px; 
    max-width: 90%; 
    margin-bottom: 20px; 
    line-height: 44px;

    color: #FFFFFF;
    margin-top: -80px
`
export const TitleCadastro = styled.p` 
    font-family: 'Open Sans'; 
    font-style: normal; 
    font-weight: 700; 
    font-size: 32px; 
    line-height: 44px; 
    margin-bottom: 8px; 
    white-space: nowrap;
`
export const SubtitleCadastro = styled.p` 
    font-family: 'Open Sans'; 
    font-style: normal; 
    font-weight: 400; 
    font-size: 18px; 
    line-height: 24px; 
    margin-bottom: 35px; 
`

export const StyledMdPerson = styled(MdPerson)` 
    color: #8647AD; 
`
 
export const StyledMdEmail = styled(MdEmail)`
    color: #8647AD; 
`

export const StyledMdLock = styled(MdLock)`
    color: #8647AD; 
`