import IconBefore from "../../assets/icons/icon-navigate-before.svg";
import IconNext from "../../assets/icons/icon-navigate-next.svg";
import IconShare from "../../assets/icons/icon-share.svg";
import ImageNews from "../../assets/img/img-ex-news.png";
import Profile from "../../assets/img/img-profile-news.png";
import { Banner } from "../../components/Banner";
import { Card } from "../../components/Card";
import { Container } from "../../styles/Global.styles";
import { ContainerArticle, ContainerAuthor, Events } from "./styles";

export function OnNews() {
  return (
    <>
      <Banner text="VII Jornada da Computação - UFPA Cametá" />
      <Container>
        <ContainerAuthor>
          <div className="share">
            <h5>Compartilhar</h5>
            <img src={IconShare} alt="share" />
          </div>
          <span className="retangle_vertical"></span>
          <div className="author">
            <img src={Profile} alt="" />
            <div className="container_data">
              <p>Por Meninas de Sistemas</p>
              <p>11/12/2023 | 11h45</p>
            </div>
          </div>
        </ContainerAuthor>
        <ContainerArticle>
          <h5 className="intro">
            VII Jornada da Computação Tecnologia e Educação será realizada pela Faculdade de
            Sistemas de Informação - UFPA Campus Cametá, nos dias 13 a 15 de Dezembro
          </h5>
          <div className="container_image">
            <img src={ImageNews} alt="" />
          </div>
          <div className="container_article">
            <article>
              <h5 className="h5">
                A Jornada da Computação é um evento que ocorre desde 2014 na Cidade de Cametá. É
                organizado pelos docentes e alunos vinculados a Faculdade de Sistemas de Informação
                da UFPA, mas conta com a colaboração de docentes de outros cursos ofertados na
                instituição. Em sua longa história, o evento já atendeu mais de mil participantes,
                sendo uma referência regional em relação a discussão da ciência e tecnologia no
                interior do Estado do Pará.
              </h5>
              <h5 className="h5">
                Durante o evento serão oferecidos quatro opções de minicursos. Na inscrição, o
                usuário deverá efetuar o pagamento da taxa que garantirá sua vaga no curso de sua
                preferência.
              </h5>
              <h5 className="h5">
                Durante o evento serão discutidos temas atuais e relevantes para a área da
                computação e afins.
              </h5>
              <h5>
                Os temas se tornarão alvo de discussão e aprofundamento a partir da participação de
                palestrantes, audiência e comunidade. Para isso, duas mesas redondas serão
                conduzidas com o intuito de explorar a computação como tema transversão no ensino,
                sociedade, gênero, e demais áreas. Sendo um dos temas a nas mesas: Meninas de
                Sistemas. O que avançamos em 12 meses de Luta?
              </h5>
            </article>
          </div>
        </ContainerArticle>
      </Container>

      <Events>
        <Container>
          <h3>Notícias Recentes</h3>
          <div className="container_cards">
            <button className="button_action button_before">
              <img src={IconBefore} alt="" />
            </button>
            <Card type="news" />
            <Card type="news" />
            <Card type="news" />
            <Card type="news" />
            <button className="button_action button_next">
              <img src={IconNext} alt="" />
            </button>
          </div>
        </Container>
      </Events>
    </>
  );
}
