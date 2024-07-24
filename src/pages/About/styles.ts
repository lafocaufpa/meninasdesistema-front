import styled from "styled-components";

export const ContainerAbout = styled.section`
  display: flex;
  align-items: center;
  gap: 51px;
  width: 100%;
  height: 443px;
  margin-top: 80px;
  .about_us .about_us_title h3 {
    color: var(--primary-color);
    font-weight: var(--font-bold);
    margin-bottom: 32px;
  }
  .about_us .about_us_description h5 {
    color: var(--text-color);
    font-weight: var(--font-regular);
    line-height: var(--small-line-height);
  }
  .about_us .about_us_description h5 {
    margin-bottom: 10px;
  }

  .about_image img {
    width: 520px;
    height: 454px;
  }
`;

export const ContainerGoals = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 600px;
  background-color: var(--bg-color-card-members);

  .goals .goals_title h3 {
    color: var(--primary-color);
    font-weight: var(--font-bold);
    margin-bottom: 42px;
    text-align: center;
  }
  .goals_cards {
    display: flex;
    align-items: center;
    gap: 64px;
  }
  .goals_cards .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 384px;
    height: 372px;
    background-color: var(--white-color);
    border-radius: 16px;
    text-align: center;
  }
  .goals_cards .card .card_image {
    margin-bottom: 40px;
  }
  .goals_cards .card .card_title h3 {
    color: var(--text-color);
    font-weight: var(--font-regular);
    margin-bottom: 20px;
  }
  .goals_cards .card .card_description h5 {
    color: var(--text-color);
    font-weight: var(--font-regular);
  }
`;
