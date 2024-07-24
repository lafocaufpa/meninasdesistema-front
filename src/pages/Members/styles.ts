import styled from "styled-components";

export const ContainerMembers = styled.section`
  width: 100%;
  margin: 80px auto;

  .members_title h3 {
    color: var(--primary-color);
    font-weight: var(--font-bold);
    text-align: center;
    margin-bottom: 32px;
  }
  .members_description h5 {
    max-width: 1128px;
    color: var(--text-color);
    font-weight: var(--font-regular);
    line-height: var(--small-line-height);
    text-align: center;
    margin: 0 auto;
    margin-bottom: 62px;
  }

  .members_cards {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    justify-items: center;
    grid-gap: 52px;
  }
`;
