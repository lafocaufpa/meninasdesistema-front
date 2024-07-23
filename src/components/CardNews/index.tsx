import IconNext from "../../assets/icons/icon-navigate-next.svg";
import IconShare from "../../assets/icons/icon-share.svg";
import Imagetest from "../../assets/img/image.png";
import { ContainerCardNews } from "./styles";

type CardNewsProps = {
  type?: string;
};

export function CardNews({ type }: CardNewsProps) {
  if (type === "event") {
    return (
      <ContainerCardNews>
        <div className="card_image">
          <img src={Imagetest} alt="" />
        </div>

        <div className="card_content">
          <div className="card_content_info">
            <div className="card_content_info_type">Palestra</div>
            <p>|</p>
            <div className="card_content_info_date">01/12/2023</div>
            <p>|</p>
            <div className="card_content_info_hour">11h45</div>
          </div>

          <h3>VII Jornada da Computação Tecnologia e Educação</h3>
          <p>
            A Jornada da Computação é um evento que ocorre desde 2014 na Cidade de Cametá. É
            organizado pelos docentes e alunos vinculados a Faculdade de Sistemas de Informação da
            UFPA, mas conta com a colaboração de docentes ...
          </p>

          <div className="card_content_buttons">
            <button className="button_action">
              <a href="#">
                <h5>Continuar lendo</h5>
                <img src={IconNext} alt="" />
              </a>
            </button>
            <button className="button_share">
              <img src={IconShare} alt="" />
            </button>
          </div>
        </div>
      </ContainerCardNews>
    );
  }
  return (
    <ContainerCardNews $marginInfo="22px">
      <div className="card_image">
        <img src={Imagetest} alt="" />
      </div>

      <div className="card_content">
        <h3>VII Jornada da Computação Tecnologia e Educação</h3>
        <p>
          A Jornada da Computação é um evento que ocorre desde 2014 na Cidade de Cametá. É
          organizado pelos docentes e alunos vinculados a Faculdade de Sistemas de Informação da
          UFPA, mas conta com a colaboração de docentes ...
        </p>

        <div className="card_content_info">
          <div className="card_content_info_date">01/12/2023</div>
          <p>|</p>
          <div className="card_content_info_hour">11h45</div>
          <p>|</p>
          <div className="card_content_info_author">Por Redação</div>
        </div>

        <div className="card_content_buttons">
          <button className="button_action">
            <a href="#">
              <h5>Continuar lendo</h5>
              <img src={IconNext} alt="" />
            </a>
          </button>
          <button className="button_share">
            <img src={IconShare} alt="" />
          </button>
        </div>
      </div>
    </ContainerCardNews>
  );
}
