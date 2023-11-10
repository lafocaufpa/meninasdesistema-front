import styled from "styled-components"


export const ContainerCard = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 50px;

    .container_cards {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
        margin-top: 9px;

        .card {
            position: relative;
            width: 392px;
            height: 276px;
            border-radius: 10px;
            border: 1px solid #56279B;

            img {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                border-radius: 10px;
            }
        }
    }
`