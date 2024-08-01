import { Banner } from "../../components/Banner";
import { CardMember } from "../../components/CardMember";
import { ContainerMembers } from "./styles";

export function Members() {
  return (
    <>
      <Banner text="Membros do Projeto Meninas de Sistemas" />
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
