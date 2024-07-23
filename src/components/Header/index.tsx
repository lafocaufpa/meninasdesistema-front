import Logo from "../../assets/img/img-logo.svg";
import { Container } from "../../styles/Global.styles";
import { HeaderComponent, Nav } from "./styles";

export function Header() {
  return (
    <HeaderComponent>
      <Container>
        <Nav>
          <div className="nav_logo">
            <div className="nav_logo_img">
              <img src={Logo} alt="logo" />
            </div>
            <div className="nav_logo_text">
              <p>MENINAS</p>
              <p>de</p>
              <p>Sistemas</p>
            </div>
          </div>

          <ul className="nav_menu">
            <li className="nav_item">
              <a href="#">Página Inicial</a>
            </li>
            <li className="nav_item">
              <a href="#">Notícias</a>
            </li>
            <li className="nav_item">
              <a href="#">Eventos</a>
            </li>
            <li className="nav_item">
              <a href="#">Membros</a>
            </li>
            <li className="nav_item">
              <a href="#">Sobre</a>
            </li>
          </ul>
        </Nav>
      </Container>
    </HeaderComponent>
  );
}
