import styled from "styled-components";

export const ContainerCardNews = styled.div<{ $marginInfo?: string }>`
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 42px 0px;
  border-top: 1px solid #c6c6c6;

  .card_image img {
    width: 439px;
    height: 260px;
    border-radius: 8px;
  }
  .card_content .card_content_info {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: var(--small-font-size);
    font-weight: var(--font-regular);
    color: var(--text-color);
    margin-top: ${(props) => (props.$marginInfo ? props.$marginInfo : "0px")};
  }
  .card_content_info .card_content_info_type {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 107px;
    height: 32px;
    background-color: var(--primary-color);
    border-radius: 4px;
    color: var(--white-color);
    font-size: var(--small-font-size);
    font-weight: var(--font-regular);
  }
  .card_content .card_content_info .card_content_info_author {
    color: var(--text-color-light);
    font-style: italic;
  }

  .card_content h3 {
    font-weight: var(--font-bold);
    color: var(--text-color-title-card);
    margin-top: 12px;
    margin-bottom: 38px;
    /* margin-bottom: 38px; */
  }
  .card_content p {
    font-weight: var(--font-regular);
    color: var(--text-color);
  }

  .card_content_buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 22px;
  }
  .card_content_buttons .button_action {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  .card_content_buttons .button_action a {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .card_content_buttons .button_action a h5 {
    color: var(--primary-color);
    font-weight: var(--font-semi-bold);
  }
  .card_content_buttons .button_action a img {
    width: 14px;
    height: 14px;
  }
  .card_content_buttons .button_share {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  .card_content_buttons .button_share img {
    width: 20px;
    height: 20px;
  }
`;
