import IconFacebook from "../../assets/icons/icon-facebook.svg";
import ImageProfile from "../../assets/img/profile.png";
import { ContainerCard } from "./styles";

export function CardMember() {
  return (
    <ContainerCard>
      <div className="member_profile">
        <div className="member_profile_image">
          <img src={ImageProfile} alt="" />
        </div>
        <div className="member_profile_name">
          <h5>Nome</h5>
          <p>Função na equipe</p>
        </div>
      </div>
      <div className="member_description">
        <p>Descrição sobre o membro e o básico sobre oque ele faz na empresa</p>
      </div>
      <div className="member_icons">
        <div className="member_icon">
          <img src={IconFacebook} alt="" />
        </div>
        <div className="member_icon">
          <img src={IconFacebook} alt="" />
        </div>
        <div className="member_icon">
          <img src={IconFacebook} alt="" />
        </div>
      </div>
    </ContainerCard>
  );
}
