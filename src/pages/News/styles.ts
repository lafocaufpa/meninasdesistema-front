import styled from "styled-components";

export const BannerNews = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  background: var(--bg-color-gradient-top);
  color: var(--white-color);
`;

export const ContainerNews = styled.section`
  width: 100%;
  max-width: 1128px;
  margin: 80px auto;

  .container_news_title h3 {
    color: var(--primary-color);
    font-weight: var(--font-bold);
    margin-bottom: 16px;
  }
  .container_news_description h5 {
    color: var(--text-color);
    font-weight: var(--font-regular);
    margin-bottom: 43px;
  }
  .container_cards_news {
    width: 100%;
  }

  .news_button {
    text-align: center;
    margin-top: 80px;
  }
  .news_button .button_more_news {
    width: 233px;
    height: 52px;
    color: var(--primary-color);
    font-size: var(--p-font-size);
    font-weight: var(--font-medium);
    background-color: transparent;
    border: 1px solid var(--primary-color);
    border-radius: 32px;
    cursor: pointer;
  }
`;
