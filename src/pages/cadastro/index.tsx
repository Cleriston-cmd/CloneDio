import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { api } from '../../services/api'; 
import { Container, Title, Column, TitleCadastro, SubtitleCadastro, Row, Wrapper, StyledMdPerson, StyledMdEmail, StyledMdLock } from './styles';
import { IFormDataCadastro } from './types';

const schema = yup.object({
    name: yup.string().required('Campo obrigatório'),
    email: yup.string().email('Email não é válido').required('Campo obrigatório'),
    password: yup.string().min(6, 'No mínimo 6 caracteres').required('Campo obrigatório'),
}).required();

const Cadastro = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm<IFormDataCadastro>({
         resolver: yupResolver(schema), 
         mode: 'onChange', 
    });

    const onSubmit = async (formData: IFormDataCadastro)=> { 
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
                        A plataforma para você <br />aprender com experts, <br />dominar as principais <br />tecnologias 
                        e entrar <br />mais rápido nas <br />empresas mais <br />desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleCadastro>Comece agora grátis!</TitleCadastro>
                        <SubtitleCadastro>Crie sua conta e make the change._</SubtitleCadastro>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="name" errorMessage={errors?.name?.message} control={control} placeholder="Nome completo" leftIcon={<StyledMdPerson />} />
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<StyledMdEmail />} />
                            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" leftIcon={<StyledMdLock />} />
                            <br />
                            <Button title="Criar minha conta" variant='secondary' type="submit"/>
                        </form>
                        <Row>
                            <p>Ao clicar em "criar minha conta", 
                                declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</p>
                            <br />
                            <p className='account-text'>Já tenho conta. <a href='/login' className='login-link'>Fazer login</a></p>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>)
}
export { Cadastro }