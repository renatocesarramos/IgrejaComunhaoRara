import { Text } from "react-native";
import { Container, HeaderInfo, UserContainer } from "./styled";
import { StatusBar } from 'expo-status-bar'

export default function Home () {
    return (
        <Container>
            <StatusBar style="light" backgroundColor='#121214' />
            <HeaderInfo>

                <UserContainer>
                    <Text>Bem Vindo, Renato</Text>
                </UserContainer>
            </HeaderInfo>
        </Container>
    )
}