import { createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
    interface PaletteOptions {
        brokenWhite?: PaletteColorOptions;
        green?: PaletteColorOptions;
    }
    interface Palette {
        brokenWhite?: PaletteColor;
        green?: PaletteColor;
    }
}

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#69f3ff',
            main: '#13c0e5',
            dark: '#008fb3',
        },
        secondary: {
            light: '#ffa366',
            main: '#ef7239',
            dark: '#b65309',
        },
        brokenWhite: {
            light: '#ffffff',
            main: '#f4f4f2',
            dark: '#c1c1bf',
        },
        green: {
            light: '#ffffa5',
            main: '#d3eb74',
            dark: '#a0b944',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 630,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
});

export default theme;
