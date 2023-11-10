import { CardHome } from "../../components/CardHome";
import { Container } from "../../styles/Global.styles";

export function Home () {
    return (
        <Container>
            <CardHome title="Notícias"/>
            <CardHome title="Eventos"/>
        </Container>
    )
}