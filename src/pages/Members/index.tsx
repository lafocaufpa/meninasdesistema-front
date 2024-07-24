import { CardMember } from "../../components/CardMember";
import { BannerNews } from "../News/styles";
import { ContainerMembers } from "./styles";

export function Members() {
  return (
    <>
      <BannerNews>
        <h2>Membros do Projeto Meninas de Sistemas</h2>
      </BannerNews>
      <ContainerMembers>
        <div className="members_title">
          <h3>Conheça nossa equipe</h3>
        </div>
        <div className="members_description">
          <h5>
            O Meninas de Sistemas é um projeto de extensão parceiro do Programa Meninas Digitais,
            promovido pela SBC, que tem como objetivo identificar e combater os motivos que levam as
            mulheres a evadir do curso de Sistemas de Informação, tanto na cidade de Cametá quanto
            nas cidades de Oeiras e Limoeiro do Ajurú, nas quais o curso é ofertado pela UFPA.
          </h5>
        </div>
        <div className="members_cards">
          <CardMember />
          <CardMember />
          <CardMember />
          <CardMember />
          <CardMember />
          <CardMember />
          <CardMember />
          <CardMember />
        </div>
      </ContainerMembers>
    </>
  );
}
