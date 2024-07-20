import styled from "styled-components";

export const ContainerFooter = styled.footer`
  position: relative;
  width: 100%;
  height: 384px;
  background-color: #e6dff0;
  border-top: 4px solid #56279b;
  margin-top: 50px;

  .container_links {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    padding-right: 59px;

    .container_suporte,
    .container_redessociais {
      width: 350.38px;
      height: 216px;
      text-align: center;
      h3 {
        font-size: 20px;
        font-weight: 700;
        color: #56279b;
      }

      ul li a {
        font-weight: 600;
        color: #56279b;
      }
    }

    .container_suporte {
      border-right: 2px dotted #56279b;
    }
  }

  .copy {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #56279b;
    text-align: center;
    color: white;
  }
`;
