import { ContainerLogoSearch } from "./styles";
import Logo from "../../assets/img/img-logo.svg"
import IconSearch from "../../assets/img/icon-search.svg"
import { Container } from "../../styles/Global.styles";

export function Search() {
    return (
        <Container>
            <ContainerLogoSearch>
                <div className="container_logo">
                    <img src={Logo} alt="" />
                    <div className="container_text">
                        <p>MENINAS</p>
                        <p>de</p>
                        <p>Sistemas</p>
                    </div>
                </div>

                <div className="container_search">
                    <input type="text" placeholder="Pesquisar"/>
                    <img src={IconSearch} alt="" />
                </div>
            </ContainerLogoSearch>
        </Container>
    )
}