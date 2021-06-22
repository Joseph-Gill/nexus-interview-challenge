import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${props => props.theme.robotoFontFamily};
        color: ${props => props.theme.black};
    }
`

export const defaultTheme = {
    // Colors
    white: '#FFFFFF',
    black: '#000000',
    textGray: '#55595D',
    spacerGray: '#D1D6E0',
    darkOne: '#3F3A50',
    //Fonts
    robotoFontFamily: 'Roboto, sans-serif',
    overpassFontFamily: 'Overpass, sans-serif',
}
