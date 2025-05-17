import styled from "styled-components";

export const HeaderComponent = styled.header`
  width: 100%;
  background-color: var(--white-color);
`;

// ::::::: MODELO 1 ::::::::
export const Nav = styled.nav`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 7.5px;
  padding-right: 36px;

  // ======= CONTAINER LOGO ======
  .nav_logo {
    display: flex;
    align-items: center;
    gap: 6.71px;
  }
  .nav_logo .nav_logo_img {
    display: flex;
    align-items: center;
  }
  .nav_logo .nav_logo_img img {
    width: 34px;
    height: 34px;
  }
  .nav_logo .nav_logo_text p {
    font-size: 9.99px;
    font-weight: var(--font-black);
    color: var(--logo-color-name);
    text-align: center;
  }

  // ====== CONTAINER MENU ======
  .nav_menu {
    display: flex;
    align-items: center;
    gap: 45.92px;
  }
  .nav_menu .nav_item a {
    font-size: 18px;
    font-weight: var(--font-medium);
    color: var(--primary-color);
  }
`;
