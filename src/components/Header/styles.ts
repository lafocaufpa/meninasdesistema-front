import styled from "styled-components"

export const HeaderContainer = styled.header`
    width: 100%;
    height: 40px;
    line-height: 40px;

    .nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 30px;
    }

    .nav_menu
    .nav_list {
        display: flex;
        align-items: center;

        li a {
            margin-left: 20px;
        }
    }
`