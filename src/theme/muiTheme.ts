import {
    createTheme,
    ThemeOptions,
    responsiveFontSizes,
} from '@mui/material/styles';

import { Montserrat, Dancing_Script, Source_Serif_4 } from 'next/font/google';

const montserrat = Montserrat({ weight: ['400', '500', '700'], subsets: ['latin'], display: 'swap', variable: '--font-montserrat' });
const dancingScript = Dancing_Script({ weight: ['400', '700'], subsets: ['latin'], display: 'swap', variable: '--font-dancing-script' });
const sourceSerif4 = Source_Serif_4({ weight: ['400', '700'], subsets: ['latin'], display: 'swap', variable: '--font-source-serif-pro' });
// dancingScript -- citati
// sourceSerif4 -- naslovi
// montserrat -- paragrafi
import colors from './colors';

// Extend PaletteOptions to include quotesPink
declare module '@mui/material/styles' {
    interface Palette {
        quotesPink: Palette['primary'];
        link: Palette['primary'];
        border: Palette['primary'];
    }
    interface PaletteOptions {
        quotesPink?: PaletteOptions['primary'];
        link?: PaletteOptions['primary'];
        border?: PaletteOptions['primary'];
    }

    interface TypographyVariants {
        body1Quotes: React.CSSProperties;
        bodyNeurons: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        body1Quotes: React.CSSProperties;
        bodyNeurons: React.CSSProperties;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        body1Quotes: true;
        bodyNeurons: true;
    }
}
// import { TypographyOptions } from '@mui/material/styles/createTypography';




let defaultTheme = createTheme({
    shape: {
        borderRadius: 8,
    },
    typography: {
        //  montserrat -> paragrafi
        fontFamily: montserrat.style.fontFamily,
        h1: {
            // sourceSerif4 -> naslovi
            fontFamily: sourceSerif4.style.fontFamily,
        },
        h2: {
            // sourceSerif4 -> naslovi
            fontFamily: sourceSerif4.style.fontFamily,
        },
        h3: {
            // sourceSerif4 -> naslovi
            fontFamily: sourceSerif4.style.fontFamily,
        },
        h4: {
            // dancingScript -> citati
            fontFamily: sourceSerif4.style.fontFamily,
        },
        h5: {
            // dancingScript -> citati
            fontFamily: dancingScript.style.fontFamily,
        },
        h6: {
            // dancingScript -> citati
            fontFamily: sourceSerif4.style.fontFamily,
        },
        body1Quotes: {
            // dancingScript -> citati
            fontFamily: dancingScript.style.fontFamily,
            fontSize: '150%',
        },
        bodyNeurons: {
            // fot desktop is same size like body2, but fo mobile is smaller
            fontFamily: montserrat.style.fontFamily,
            fontSize: '.9rem',
            '@media (max-width: 600px)': {
                fontSize: '.6rem',
            },
        } as React.CSSProperties,
    },

    palette: {
        primary: {
            main: colors.primary,
        },
        secondary: {
            main: colors.secondary,
        },
        background: {
            default: colors.background,
        },
        quotesPink: {
            main: colors.quotesPink,
        },
        text: {
            primary: colors.textPrimary,
            secondary: colors.textSecondary,
        },
        link: {
            main: colors.link,
        },
        border: {
            main: colors.border,
        },
        error: {
            main: colors.error,
        },

        success: {
            main: colors.success,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: colors.textPrimary,
                },
            },
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1450,
            xl: 1604,
        },
    },
});

defaultTheme = responsiveFontSizes(defaultTheme);

export default defaultTheme;