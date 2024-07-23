import { CardNews } from "../../components/CardNews";
import { BannerNews, ContainerNews } from "../News/styles";

export function Events() {
  return (
    <>
      <BannerNews>
        <h2>Eventos | Projeto Meninas de Sistemas</h2>
      </BannerNews>
      <ContainerNews>
        <div className="container_news_title">
          <h3>Próximos Eventos</h3>
        </div>
        <div className="container_news_description">
          <h5>
            Lorem ipsum dolor sit amet consectetur. Viverra tortor gravida fermentum diam eu.
            Consequat enim fermentum lacus dui id. Ultricies eu ac ipsum sit proin justo commodo
            vitae. Posuere bibendum nisl tellus ultricies nisl ullamcorper sed.
          </h5>
        </div>

        <div className="container_cards_news">
          <CardNews type="event" />
          <CardNews type="event" />
          <CardNews type="event" />
        </div>

        <div className="news_button">
          <button className="button_more_news">Carregar mais eventos</button>
        </div>
      </ContainerNews>
    </>
  );
}
