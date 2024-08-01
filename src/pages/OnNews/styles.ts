import styled from "styled-components";

export const ContainerAuthor = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-top: 80px;
  border-bottom: 1px solid #c6c6c6;
  .share {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    width: 178px;
    height: 42px;
    color: var(--primary-color);
    background-color: var(--primary-color-light-hover);
    border-radius: 15px;
    cursor: pointer;
  }
  .share h5 {
    font-weight: var(--font-regular);
  }
  .share img {
    width: 18px;
    height: 18px;
  }

  .retangle_vertical {
    height: 42px;
    width: 1px;
    background-color: var(--text-color);
  }

  .author {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .author img {
    width: 50px;
    height: 50px;
  }
  .author .container_data p:nth-child(1) {
    color: var(--text-color);
    font-weight: var(--font-medium);
    margin-bottom: 5px;
  }
  .author .container_data p:nth-child(2) {
    font-size: var(--small-font-size);
    font-weight: var(--font-regular);
    color: var(--text-color);
  }
`;

export const ContainerArticle = styled.div`
  .intro {
    width: 100%;
    max-width: 1136px;
    margin: 0 auto;
    font-style: italic;
    font-weight: var(--font-regular);
    color: var(--text-color);
    text-align: center;
    margin-top: 42px;
    line-height: var(--normal-line-height);
  }
  .container_image {
    text-align: center;
    margin-top: 80px;
  }
  .container_image img {
    width: 1142px;
    height: 509px;
  }
  .container_article {
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    margin-top: 80px;
  }
  .container_article article > .h5 {
    margin-bottom: 10px;
  }
  .container_article article > h5 {
    color: var(--text-color);
    font-weight: var(--font-regular);
    line-height: var(--normal-line-height);
  }
`;

export const Events = styled.div`
  margin-top: 80px;
  h3 {
    text-align: left;
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
