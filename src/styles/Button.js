import { defineStyleConfig, defineStyle } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

import {
    LIGHT_PRIMARY_COLOR,
    DARK_PRIMARY_COLOR,
    DARK_SECONDARY_COLOR,
    LIGHT_SECONDARY_COLOR
} from './consts';


const variantPrimary = defineStyle((props) => {
    return {
        padding: 21,
        bg: mode(LIGHT_SECONDARY_COLOR, DARK_SECONDARY_COLOR)(props),
        color: mode('white', 'gray.900')(props),
        _hover: {
            opacity: 0.8,
            transition: 'opacity 0.2s',
        },
        _active: {
            opacity: 0.6,
            transition: 'opacity 0.2s',
        }
    }
});

const Button = defineStyleConfig({
    // The styles all button have in common
    baseStyle: {
        borderRadius: 0
    },
    variants: {
        'primary': variantPrimary,
        // 'primary': {
        //     padding: 21,
        //     bg: 'orange.200',
        // },
    }
});

export default Button;