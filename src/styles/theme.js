import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'
import Button from "./Button";
import Text, { Link, Heading } from "./Text";
import Card from "./Card";
import {
    LIGHT_PRIMARY_COLOR,
    LIGHT_SECONDARY_COLOR,
    DARK_PRIMARY_COLOR,
    DARK_SECONDARY_COLOR,
} from "./consts";


// Set color theme to system default
let initialColorMode = 'light';
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    initialColorMode = 'dark';
}
localStorage.setItem('chakra-ui-color-mode', initialColorMode);

const theme = extendTheme({
    components: {
        Button,
        Card,
        Text,
        Link,
        Heading,
    },
    styles: {
        global: (props) => ({
            body: {
                // backgroundImage: mode(
                //     `linear-gradient(to right top, ${LIGHT_PRIMARY_COLOR}, white);`,
                //     `linear-gradient(to right top, ${DARK_PRIMARY_COLOR}, #1A202C);`,
                //     // DARK_PRIMARY_COLOR
                // )(props),
                bg: mode(LIGHT_PRIMARY_COLOR, DARK_PRIMARY_COLOR)(props),
                backgroundAttachment: 'fixed'
            },
        }),
    },
    config: {
        initialColorMode: initialColorMode,
        useSystemColorMode: true,
    },
})

export default theme;