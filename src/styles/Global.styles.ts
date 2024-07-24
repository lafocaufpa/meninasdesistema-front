import styled, { createGlobalStyle } from "styled-components";

import { theme } from "./Theme.styles";

export const GlobalStyles = createGlobalStyle`
/*========== Variables css ==========*/

:root {
    --header-height: 5rem;

    /*========== Colors ==========*/
    --white-color: ${theme.colors.surface.white};

    --primary-color: ${theme.colors.primary.main};
    --secondary-color: ${theme.colors.secondary.main};

    --first-color-gradient-top: ${theme.gradientTop.firtsColor};
    --second-color-gradient-top: ${theme.gradientTop.secondColor};

    --first-color-gradient-bottom: ${theme.gradientBottom.firstColor};
    --second-color-gradient-bottom:  ${theme.gradientBottom.secondColor};

    --logo-color-name: ${theme.logo.name};

    --bg-container-mission: ${theme.colors.primary.light};

    --text-color: ${theme.typography.main};
    --text-color-light: ${theme.typography.light};

    --text-color-title-card: #3A3A3A;
    --text-color-description-card: #747474;
    --color-border-card: #CBBCE0;

    --title-color-white: var(--white-color);
    --title-color-primary: var(--primary-color);
    --title-color-black: var(--text-color);

    --body-color: #F7F7F7;

    --bg-color-card-members: ${theme.colors.primary.lightHover};
    --bg-color-button-action: rgba(243, 243, 243, 0.80);

    --bg-color-gradient-top: linear-gradient(90deg, var(--first-color-gradient-top) 28%, var(--second-color-gradient-top) 100%);
    --bg-color-gradient-bottom: linear-gradient(90deg,  var(--first-color-gradient-bottom) 0%, var(--second-color-gradient-bottom) 100%);

    /*========== Font and typography ==========*/
    --body-font: 'Roboto', sans-serif;
    --standard-font-size: 16px;

    --h1-font-size: 44px;
    --h2-font-size: 30px;
    --h3-font-size: 28px;
    --h4-font-size: 20px;
    --h5-font-size: 18px;
    --p-font-size: 16px;
    --small-font-size: 14px;
    --smaller-font-size: 12px;

    /*========= Line height ==========*/
    --normal-line-height: 32px;
    --small-line-height: 28px;
    --smaller-line-height: 24px;


    /*========== Font weight ==========*/ 
    --font-regular: 400;
    --font-medium: 500;
    --font-semi-bold: 600;
    --font-bold: 700;
    --font-black: 900;

    /*========= Font stretch =========*/
    --font-stretch: condensed;
    
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--body-font);
}

html, body {
    height: 100%;
    background-color: var(--body-color);
}

h1 {
    font-size: var(--h1-font-size);
}
h2 {
    font-size: var(--h2-font-size);
}
h3 {
    font-size: var(--h3-font-size);
}
h4 {
    font-size: var(--h4-font-size);
}
h5 {
    font-size: var(--h5-font-size);
}
p {
    font-size: var(--p-font-size);
}

li {
    list-style: none;
}

a {
    text-decoration: none;
}

`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 30px;
`;
