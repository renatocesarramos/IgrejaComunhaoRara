import { Image, View } from "react-native";
import { Container, Header, ImageProfile } from "./styled";
import Logo from '@/src/assets/images/logo.svg'

export default function Home () {
    return (
        <Container>
            <Header>
                <Logo width={40} height={40}/>
            </Header>
        </Container>
    )
}