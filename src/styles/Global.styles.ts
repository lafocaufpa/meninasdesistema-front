import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

html, body {
    height: 100%;
}

li {
    list-style: none;
}

a {
    text-decoration: none;
}

`

export const Container = styled.div`
    width: 100%;
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 26px;
`