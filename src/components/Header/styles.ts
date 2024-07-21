import styled from "styled-components";

export const HeaderComponent = styled.header`
  width: 100%;
  background-color: var(--white-color);
`;

export const Nav = styled.nav`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  // ======= CONTAINER LOGO ======
  .nav_logo {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .nav_logo .nav_logo_img img {
    width: 34.04px;
    height: 34.04px;
  }
  .nav_logo .nav_logo_text {
    font-size: var(--smaller-font-size-logo);
    font-weight: var(--font-black);
    color: var(--logo-color-name);
    text-align: center;
  }

  // ====== CONTAINER MENU ======
  .nav_menu {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .nav_menu .nav_item {
    font-size: var(--smaller-font-size-description);
    font-weight: var(--font-medium);
    color: var(--primary-color);
  }
`;
