import styled from "styled-components";

export const BoxCard = styled.div`
  width: 100%;
  max-width: 398px;
  min-width: 398px;
  background-color: var(--white-color);
  border-radius: 18px;
  .card_image {
    width: 100%;
    height: 282px;
    background-color: lightgray;
    border-radius: 18px 18px 0px 0px;
  }
  .card_image img {
    width: 100%;
    height: 100%;
  }
  .card_info {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0px 16px;
    font-size: var(--small-font-size);
    margin-top: 18px;
  }
  .card_info > p {
    color: var(--text-color);
  }
  .card_info_type {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 24px;
    background-color: var(--primary-color);
    color: var(--white-color);
    border-radius: 4px;
  }
  .card_info_date,
  .card_info_hour {
    color: var(--text-color);
  }
  .card_title_description {
    padding: 0px 18px;
  }
  .card_title_description h4 {
    text-align: left;
    color: var(--text-color-title-card);
    margin-top: 18px;
    margin-bottom: 18px;
  }
  .card_title_description p {
    color: var(--text-color-description-card);
    line-height: var(--smaller-line-height);
    font-weight: var(--font-regular);
    padding-bottom: 18px;

    border-bottom: 0.5px solid var(--color-border-card);
  }
  .card_link {
    padding: 18px 18px;
  }
  .card_link a {
    width: 166px;
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .card_info a p {
    color: var(--primary-color);
    font-weight: var(--font-medium);
  }
  .card_link img {
    width: 16px;
    height: 16px;
  }
`;
