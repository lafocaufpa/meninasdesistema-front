import styled from "styled-components";

// :::::::::::: MODELO 1 ::::::::::
export const Banner = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 700px;
  background: var(--bg-color-gradient-top);

  .container_banner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .container_banner .banner_texts {
    color: var(--white-color);
  }
  .container_banner .banner_texts .banner_texts_title h1 {
    font-size: 62px;
    margin-bottom: 10px;
  }
  .container_banner .banner_texts .banner_texts_subtitle p {
    width: 739px;
    font-size: 18px;
    font-weight: var(--font-regular);
    line-height: 32px;
    margin-bottom: 120px;
  }
  .container_banner .banner_texts .banner_texts_italic h4 {
    font-style: italic;
    font-weight: var(--font-medium);
  }
  .container_banner .banner_image img {
    width: 400px;
  }
`;

export const Mission = styled.section`
  width: 100%;
  height: 576px;
  background-color: var(--bg-container-mission);
  .container_mission {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .container_mission .mission_texts .mission_texts_title h2 {
    font-size: 40px;
    font-weight: var(--font-bold);
    color: var(--title-color-primary);
    margin-bottom: 24px;
  }
  .container_mission .mission_texts .mission_texts_description h5 {
    font-weight: var(--font-regular);
    color: var(--text-color);
    line-height: var(--small-line-height);
  }
  .container_mission .mission_texts .mission_texts_description h5:nth-child(1) {
    margin-bottom: 8px;
  }
  .mission_image img {
    width: 560px;
    height: 560px;
  }
`;

export const Events = styled.section`
  margin-top: 80px;
  h3 {
    text-align: center;
    color: var(--title-color-primary);
    margin-bottom: 42px;
  }

  .container_cards {
    position: relative;
    width: 100%;
    max-width: 1440px;
    display: flex;
    align-items: center;
    gap: 42px;
    overflow: hidden;
    margin: 0 auto;
    margin-bottom: 42px;
    z-index: 10;
  }
  .container_cards .button_action {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 68px;
    background-color: var(--bg-color-button-action);
    border: none;
    border-radius: 16px;
    cursor: pointer;
  }
  .container_cards .button_before {
    left: 0;
  }
  .container_cards .button_next {
    right: 0;
  }
  .event_button {
    text-align: center;
  }
  .event_button .button {
    width: 152px;
    height: 52px;
    color: var(--primary-color);
    background-color: transparent;
    font-size: var(--p-font-size);
    font-weight: var(--font-medium);
    border: 1px solid var(--primary-color);
    border-radius: 32px;
    margin: 0 auto;

    cursor: pointer;
  }
`;

export const News = styled.section`
  margin-top: 80px;
  h3 {
    text-align: center;
    color: var(--title-color-primary);
    margin-bottom: 42px;
  }

  .container_cards {
    position: relative;
    width: 100%;
    max-width: 1440px;
    display: flex;
    align-items: center;
    gap: 42px;
    overflow: hidden;
    margin: 0 auto;
  }
  .container_cards .button_action {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 68px;
    background-color: var(--bg-color-button-action);
    border: none;
    border-radius: 16px;
    cursor: pointer;
  }
  .container_cards .button_before {
    left: 0;
  }
  .container_cards .button_next {
    right: 0;
  }
  .event_button {
    text-align: center;
    margin-top: 42px;
  }
  .event_button .button {
    width: 152px;
    height: 52px;
    color: var(--primary-color);
    background-color: transparent;
    font-size: var(--p-font-size);
    font-weight: var(--font-medium);
    border: 1px solid var(--primary-color);
    border-radius: 32px;
    margin: 0 auto;

    cursor: pointer;
  }
`;

export const SectionGradient = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 419px;
  background: var(--bg-color-gradient-bottom);

  color: var(--white-color);

  margin-top: 80px;

  h2 {
    font-size: 40px; // COM FONT-SIZE DO LAYOUT
    font-weight: var(--font-bold);
    margin-bottom: 42px;
  }

  h4 {
    width: 100%;
    max-width: 1060px;
    font-size: 22px; // COM FONT-SIZE DO LAYOUT
    font-weight: var(--font-regular);
    text-align: center;
    line-height: var(--normal-line-height);
  }
`;
