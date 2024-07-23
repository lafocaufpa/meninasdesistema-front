import Logo from "../../assets/img/img-logo.svg";
import { Container } from "../../styles/Global.styles";
import { ContainerFooter } from "./styles";

export function Footer() {
  return (
    <ContainerFooter>
      <Container>
        <div className="box_footer">
          <div className="footer_logo">
            <img src={Logo} alt="" />
            <h4>Meninas de Sistemas</h4>
          </div>
          <div className="footer_links">
            <div className="item">
              <h4>Heading</h4>
              <ul>
                <li>
                  <a href="#">Lorem Ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem Ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem Ipsum</a>
                </li>
              </ul>
            </div>
            <div className="item">
              <h4>Heading</h4>
              <ul>
                <li>
                  <a href="#">Lorem Ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem Ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem Ipsum</a>
                </li>
              </ul>
            </div>
            <div className="item">
              <h4>Heading</h4>
              <ul>
                <li>
                  <a href="#">Lorem Ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem Ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem Ipsum</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </ContainerFooter>
  );
}
