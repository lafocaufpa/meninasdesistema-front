import IconCalendar from "../../assets/icons/icon-calendar.svg";
import IconLocal from "../../assets/icons/icon-local.svg";
import BannerMulheres from "../../assets/img/img-mulheres.png";
import { Banner } from "../../components/Banner";
import { Container } from "../../styles/Global.styles";
import { ContainerContent, ContainerInfo } from "./styles";

export function Event() {
  return (
    <>
      <Banner text="1º Encontro de Mulheres na Computação" />
      <Container>
        <ContainerInfo>
          <div className="type">
            <p>Palestra</p>
          </div>
          <span className="retangle_vertical"></span>
          <div className="container_display container_date">
            <img src={IconCalendar} alt="" />
            <h5>22/01/2023</h5>
          </div>
          <span className="retangle_vertical"></span>
          <div className="container_display container_local">
            <img src={IconLocal} alt="" />
            <h5>Universidade Federal do Pará</h5>
          </div>
        </ContainerInfo>
        <ContainerContent>
          <div className="container_image">
            <img src={BannerMulheres} alt="" />
          </div>
          <div className="container_data">
            <h3 className="title_hour_date">Horário e Local</h3>
            <div className="hour_date">
              <h5>21 de fev. de 2020, 08:00</h5>
              <h5>
                Universidade Federal do Pará, Campus I C, Av. dos Universitários, s/n - Jaderlândia,
                Castanhal - PA, 68746-630, Brasil
              </h5>
            </div>
            <h3 className="title_about">Sobre o Evento</h3>
            <div className="about">
              <h5>
                O 1º Encontro de Mulheres na Computação tem como objetivo inspirar e promover a
                inclusão das alunas do ensino médio no campo da Tecnologia da Informação. Este
                evento é organizado pelo grupo Meninas de Sistemas, que tem como missão incentivar a
                participação feminina no curso de Sistemas de Informação da Universidade Federal do
                Pará - Campus Cametá.
              </h5>
            </div>
            <h3 className="title_inscrever">Inscreva-se</h3>
            <div className="container_inscrever">
              <a href="">https://www.even3.com.br/mulheres-comp</a>
            </div>
          </div>
        </ContainerContent>
      </Container>
    </>
  );
}
