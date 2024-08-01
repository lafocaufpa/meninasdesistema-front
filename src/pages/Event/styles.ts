import styled from "styled-components";

export const ContainerInfo = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 80px;
  border-bottom: 1px solid #c6c6c6;
  .retangle_vertical {
    height: 24px;
    width: 1px;
    background-color: #485360;
  }
  .container_display {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .type {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 83px;
    height: 24px;
    background-color: var(--primary-color);
    border-radius: 4px;
  }
  .type p {
    color: var(--white-color);
    font-weight: var(--font-medium);
  }
  .container_date,
  .container_local {
    color: #333333;
  }
`;

export const ContainerContent = styled.div`
  width: 100%;
  max-width: 1060px;
  margin: 0 auto;
  margin-top: 80px;
  .container_image img {
    width: 100%;
    height: 426px;
  }

  .container_data h3 {
    color: var(--primary-color);
    font-weight: var(--font-bold);
  }
  .container_data .title_hour_date {
    margin-top: 52px;
    margin-bottom: 10px;
  }
  .container_data .title_about {
    margin-top: 52px;
    margin-bottom: 10px;
  }
  .container_data .title_inscrever {
    margin-top: 52px;
    margin-bottom: 10px;
  }
  .container_data .hour_date h5 {
    color: #333333;
    font-weight: var(--font-regular);
    line-height: var(--normal-line-height);
  }
  .container_data .about h5 {
    color: #333333;
    font-weight: var(--font-regular);
    line-height: var(--normal-line-height);
  }
  .container_data .container_inscrever {
    margin-bottom: 52px;
  }
  .container_data .container_inscrever a {
    color: #333333;
    text-decoration: underline;
  }
`;
