import IconDevelop from "../../assets/icons/icon-develop.svg";
import IconBefore from "../../assets/icons/icon-navigate-before.svg";
import IconNext from "../../assets/icons/icon-navigate-next.svg";
import ImageAbout from "../../assets/img/img-about.png";
import { Banner } from "../../components/Banner";
import { Card } from "../../components/Card";
import { Container } from "../../styles/Global.styles";
import { Events } from "../Home/styles";
import { ContainerAbout, ContainerGoals } from "./styles";

export function About() {
  return (
    <>
      <Banner text="Sobre o Projeto Meninas de Sistemas" />
      <Container>
        <ContainerAbout>
          <div className="about_us">
            <div className="about_us_title">
              <h3>Quem Somos?</h3>
            </div>
            <div className="about_us_description">
              <h5>
                O Meninas de Sistemas é um projeto de extensão parceiro do Programa Meninas
                Digitais, promovido pela SBC, que tem como objetivo identificar e combater os
                motivos que levam as mulheres a evadir do curso de Sistemas de Informação, tanto na
                cidade de Cametá quanto nas cidades de Oeiras e Limoeiro do Ajurú, nas quais o curso
                é ofertado pela UFPA.
              </h5>
              <h5>
                Acredita-se que esse projeto pode ajudar na diminuição do número de evasão no curso
                de Sistemas de Informação, a partir de ações em escolas públicas da região do Baixo
                Tocantins que incentivem o ingresso de mulheres no curso de Sistemas de Informação e
                de ações afirmativas com discentes do curso (ingressas e egressas).
              </h5>
            </div>
          </div>
          <div className="about_image">
            <img src={ImageAbout} alt="" />
          </div>
        </ContainerAbout>
      </Container>
      <ContainerGoals>
        <Container>
          <div className="goals">
            <div className="goals_title">
              <h3>Nossos Objetivos</h3>
            </div>
            <div className="goals_cards">
              <div className="card">
                <div className="card_image">
                  <img src={IconDevelop} alt="" />
                </div>
                <div className="card_title">
                  <h3>Development</h3>
                </div>
                <div className="card_description">
                  <h5>Create a platform with the best and coolest quality from us.</h5>
                </div>
              </div>
              <div className="card">
                <div className="card_image">
                  <img src={IconDevelop} alt="" />
                </div>
                <div className="card_title">
                  <h3>Development</h3>
                </div>
                <div className="card_description">
                  <h5>Create a platform with the best and coolest quality from us.</h5>
                </div>
              </div>
              <div className="card">
                <div className="card_image">
                  <img src={IconDevelop} alt="" />
                </div>
                <div className="card_title">
                  <h3>Development</h3>
                </div>
                <div className="card_description">
                  <h5>Create a platform with the best and coolest quality from us.</h5>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </ContainerGoals>
      <Events>
        <h3>Nossas Ações</h3>

        <Container>
          <div className="container_cards">
            <button className="button_action button_before">
              <img src={IconBefore} alt="" />
            </button>
            <Card type="event" />
            <Card type="event" />
            <Card type="event" />
            <Card type="event" />
            <button className="button_action button_next">
              <img src={IconNext} alt="" />
            </button>
          </div>
        </Container>
      </Events>
    </>
  );
}
