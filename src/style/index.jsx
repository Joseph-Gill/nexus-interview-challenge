import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${props => props.theme.robotoFontFamily};
    }
`

export const defaultTheme = {
    // Colors
    white: '#FFFFFF',
    //Fonts
    robotoFontFamily: 'Roboto, sans-serif',
}
