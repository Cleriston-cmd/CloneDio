import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-dio.png';
import { Button } from '../Button';

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from "./styles";

const Header = ({autenticado}) => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    }

    const handleRegisterClick = () => {
        navigate('/cadastro'); 
    };

  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt='Logo Dio'/>
                {autenticado ? (
                <>
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...' />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </>
                ) : null}
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src='https://avatars.githubusercontent.com/u/176426423?v=4' />
                ) : (
                    <>
                        <MenuRight href='/'>Home</MenuRight>
                        <Button title="Entrar" onClick={handleLoginClick}/>
                        <Button title="Cadastrar" onClick={handleRegisterClick}/> 
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }