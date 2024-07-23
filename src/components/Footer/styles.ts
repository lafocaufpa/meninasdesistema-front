import styled from "styled-components";

export const ContainerFooter = styled.footer`
  width: 100%;
  height: 238px;
  background-color: var(--primary-color);
  padding-top: 48px;
  .box_footer {
    display: flex;
    justify-content: space-between;
    color: var(--white-color);
  }
  .box_footer .footer_logo {
    display: flex;
    align-items: center;
    gap: 10px;
    align-self: baseline;
  }
  .box_footer .footer_logo img {
    width: 48px;
    height: 48px;
  }
  .box_footer .footer_logo h4 {
    font-weight: var(--font-semi-bold);
  }
  .box_footer .footer_links {
    display: flex;
    align-items: center;
    gap: 60px;
  }
  .box_footer .footer_links .item h4 {
    margin-bottom: 15px;
  }
  .box_footer .footer_links .item li {
    margin-bottom: 10px;
  }
  .box_footer .footer_links .item li a {
    color: var(--white-color);
    font-size: var(--p-font-size);
    font-weight: var(--font-regular);
  }
`;
