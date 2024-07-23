import { Link } from "react-router-dom";

import IconNext from "../../assets/icons/icon-navigate-next.svg";
import ImageCard from "../../assets/img/img-card.png";
import { BoxCard } from "./styles";

type CardProps = {
  type?: string;
};

export function Card({ type }: CardProps) {
  if (type === "event") {
    return (
      <BoxCard>
        <div className="card_image">
          <img src={ImageCard} alt="" />
        </div>
        <div className="card_info">
          <div className="card_info_type">Palestra</div>
          <p>|</p>
          <div className="card_info_date">01/12/2023</div>
          <p>|</p>
          <div className="card_info_hour">11h45</div>
        </div>
        <div className="card_title_description">
          <h4>How it Started2?</h4>
          <p>
            In 1945, representatives of 50 countries met in San Francisco at the United Nations
            Conference on International Organization to draw up the United Nations Charter.
          </p>
        </div>
        <div className="card_link">
          <Link to="#">
            <h5>Continuar lendo</h5>
            <img src={IconNext} alt="next" />
          </Link>
        </div>
      </BoxCard>
    );
  }

  return (
    <BoxCard>
      <div className="card_image">
        <img src={ImageCard} alt="" />
      </div>
      <div className="card_title_description">
        <h4>How it Started2?</h4>
        <p>
          In 1945, representatives of 50 countries met in San Francisco at the United Nations
          Conference on International Organization to draw up the United Nations Charter.
        </p>
      </div>
      <div className="card_link">
        <Link to="#">
          <h5>Continuar lendo</h5>
          <img src={IconNext} alt="next" />
        </Link>
      </div>
    </BoxCard>
  );
}
