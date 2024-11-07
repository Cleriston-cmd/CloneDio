import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { api } from '../../services/api'; 
import { Container, Title, Column, TitleCadastro, SubtitleCadastro, Row, Wrapper } from './styles';

const schema = yup.object({
    name: yup.string().required('Campo obrigatório'),
    email: yup.string().email('Email não é válido').required('Campo obrigatório'),
    password: yup.string().min(6, 'No mínimo 6 caracteres').required('Campo obrigatório'),
}).required();

const Cadastro = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
         resolver: yupResolver(schema), 
         mode: 'onChange', 
    });

    const onSubmit = async formData => { 
        try {
            const response = await api.post('/register', formData);
            if (response.status === 201) {
                navigate('/cadastro'); 
                return;
            } 
            
            alert('Erro ao criar conta')
            } catch(e){
            alert('Houve um erro, tente novamente.')
        }
    };

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias 
                        e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleCadastro>Comece agora grátis!!</TitleCadastro>
                        <SubtitleCadastro>Crie sua conta e make the change._</SubtitleCadastro>
                        <form>
                            <Input name="name" control={control} placeholder="Nome completo" leftIcon={<MdPerson />} />
                            <Input name="email" control={control} placeholder="E-mail" leftIcon={<MdPerson />} />
                            <Input name="password" control={control} placeholder="Senha" leftIcon={<MdPerson />} />
                            <Button title="Criar minha conta" variant='secondary' />
                        </form>
                        <Row>
                            <p>Ao clicar em "criar minha conta", 
                                declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</p>
                            <p>Já tenho conta <a href='/cadastro'>Fazer login</a></p>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}
export { Cadastro }