import styled from "styled-components";

export const ContainerLogoSearch = styled.div`
    width: 100%;
    height: 170px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .container_logo {
        display: flex;
        align-items: center;
        gap: 24.11px;
        padding-top: 19px;

        .container_text {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #9300C7;
            font-size: 35.879px;
            font-weight: 900;
        }

    }

    .container_search {
        display: flex;
        align-items: center;
        width: 322px;
        height: 40px;
        background-color: #E6DFF0;
        border-radius: 15px;
        padding: 0 15px;

        input {
            width: 100%;
            height: 100%;
            background-color: transparent;
            border: none;
            outline: none;
        }

        input::placeholder {
            text-align: right;
            padding-right: 15px;
            color: #56279B;
            font-weight: 500;
        }
    }
`
