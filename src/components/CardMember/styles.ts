import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 392px;
  height: 369px;
  background-color: var(--bg-color-card-members);
  padding: 32px;
  border-radius: 16px;

  .member_profile {
    display: flex;
    align-items: center;
    gap: 19px;
  }
  .member_profile_image,
  .member_profile_image img {
    width: 93px;
    height: 93px;
    border-radius: 50%;
  }
  .member_profile_name h5 {
    color: var(--primary-color);
    font-weight: var(--font-bold);
    margin-bottom: 13px;
  }
  .member_profile_name p {
    color: var(--text-color);
    font-weight: var(--font-regular);
  }

  .member_description p {
    color: var(--text-color);
    font-weight: var(--font-regular);
    margin-top: 22px;
  }
  .member_icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 60px;
  }
  .member_icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background-color: var(--white-color);
  }
`;
