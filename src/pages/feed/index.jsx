import { Link } from "react-router-dom";

import bannerImage from '../../assets/banner.png';
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Header } from "../../components/Header";

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo percentual={92} nome="Cleriston Andrade" image="https://avatars.githubusercontent.com/u/176426423?v=4"/>
                <UserInfo percentual={86} nome="Cleriston Andrade" image="https://avatars.githubusercontent.com/u/176426423?v=4"/>
                <UserInfo percentual={82} nome="Cleriston Andrade" image="https://avatars.githubusercontent.com/u/176426423?v=4"/>
                <UserInfo percentual={75} nome="Cleriston Andrade" image="https://avatars.githubusercontent.com/u/176426423?v=4"/>
                <UserInfo percentual={60} nome="Cleriston Andrade" image="https://avatars.githubusercontent.com/u/176426423?v=4"/>
                <UserInfo percentual={55} nome="Cleriston Andrade" image="https://avatars.githubusercontent.com/u/176426423?v=4"/>
            </Column>
        </Container>
    </>)
}

export { Feed }