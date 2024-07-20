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

    --bg-container-about: ${theme.colors.primary.light};

    --text-color: ${theme.typography.main};
    --text-color-light: ${theme.typography.light};

    --title-color-white: var(--white-color);
    --title-color-primary: var(--primary-color);
    --title-color-black: var(--text-color);

    --body-color: var(--white-color);

    --bg-color-gradient-top: linear-gradient(90deg, var(--first-color-gradient-top) 28%, var(--second-color-gradient-top) 100%);
    --bg-color-gradient-bottom: linear-gradient(90deg,  var(--first-color-gradient-bottom) 0%, var(--second-color-gradient-bottom) 100%);

    /*========== Font and typography ==========*/
    --body-font: 'Roboto', sans-serif;
    --standard-font-size: 16px;

    --big-font-size-logo: 50px;
    --small-font-size-logo: 38px;
    --smaller-font-size-logo: 10px;

    --title-font-size: 40px;
    --subtitle-font-size: 28px;

    --normal-font-size-description: 22px;
    --small-font-size-description: 20px;
    --smaller-font-size-description: 18px;

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
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 80px;
`