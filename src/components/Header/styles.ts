import styled from "styled-components";

export const HeaderComponent = styled.header`
  width: 100%;
  background-color: var(--white-color);
`;

export const Nav = styled.nav`
  height: 80px;
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
    width: 60px;
    height: 60px;
  }
  .nav_logo .nav_logo_text p {
    font-size: var(--small-font-size);
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
  .nav_menu .nav_item a {
    font-size: var(--p-font-size);
    font-weight: var(--font-medium);
    color: var(--primary-color);
  }
`;
