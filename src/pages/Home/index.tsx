import IconBefore from "../../assets/icons/icon-navigate-before.svg";
import IconNext from "../../assets/icons/icon-navigate-next.svg";
import ImageBanner from "../../assets/img/img-banner.png";
import ImageMission from "../../assets/img/img-mission.png";
import { Card } from "../../components/Card";
import { Container } from "../../styles/Global.styles";
import { Banner, Events, Mission, News, SectionGradient } from "./styles";

export function Home() {
  return (
    <>
      <Banner>
        <Container>
          <div className="container_banner">
            <div className="banner_texts">
              <div className="banner_texts_title">
                <h1>Projeto Meninas de Sistemas</h1>
              </div>
              <div className="banner_texts_subtitle">
                <p>
                  Acreditamos que todos têm lugar no mundo da tecnologia, e estamos comprometidos em
                  remover as barreiras que impedem as mulheres de prosperar no campo da Computação.
                </p>
              </div>
              <div className="banner_texts_italic">
                <h4>&#34;Juntas Somos Mais Forte&#34;</h4>
              </div>
            </div>

            <div className="banner_image">
              <img src={ImageBanner} alt="image banner" />
            </div>
          </div>
        </Container>
      </Banner>

      <Mission>
        <Container>
          <div className="container_mission">
            <div className="mission_texts">
              <div className="mission_texts_title">
                <h2>Nossa Missão</h2>
              </div>
              <div className="mission_texts_description">
                <h5>
                  O Meninas de Sistemas é um projeto de extensão parceiro do Programa Meninas
                  Digitais, promovido pela SBC, que tem como objetivo identificar e combater os
                  motivos que levam as mulheres a evadir do curso de Sistemas de Informação, tanto
                  na cidade de Cametá quanto nas cidades de Oeiras e Limoeiro do Ajurú, nas quais o
                  curso é ofertado pela UFPA.
                </h5>
                <h5>
                  Acredita-se que esse projeto pode ajudar na diminuição do número de evasão no
                  curso de Sistemas de Informação, a partir de ações em escolas públicas da região
                  do Baixo Tocantins que incentivem o ingresso de mulheres no curso de Sistemas de
                  Informação e de ações afirmativas com discentes do curso (ingressas e egressas).
                </h5>
              </div>
            </div>
            <div className="mission_image">
              <img src={ImageMission} alt="image mission" />
            </div>
          </div>
        </Container>
      </Mission>

      <Events>
        <h3>Próximos Eventos</h3>

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

        <div className="event_button">
          <button className="button">Ver mais</button>
        </div>
      </Events>

      <News>
        <h3>Últimas Notícias</h3>

        <Container>
          <div className="container_cards">
            <button className="button_action button_before">
              <img src={IconBefore} alt="" />
            </button>
            <Card />
            <Card />
            <Card />
            <Card />
            <button className="button_action button_next">
              <img src={IconNext} alt="" />
            </button>
          </div>
        </Container>

        <div className="event_button">
          <button className="button">Ver mais</button>
        </div>
      </News>

      <SectionGradient>
        <h2>Lorem ipsum dolor sit amet consectetur</h2>
        <h4>
          Lorem ipsum dolor sit amet consectetur. Id at commodo ornare sed nibh. Commodo quis
          dignissim cursus nulla dignissim sapien at feugiat. Risus elementum blandit consectetur
          morbi eget et eu ullamcorper praesent. Porta posuere commodo aliquam amet risus vulputate
          et felis.
        </h4>
      </SectionGradient>
    </>
  );
}
