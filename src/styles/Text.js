import { defineStyleConfig, defineStyle } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

import {
    LIGHT_PRIMARY_COLOR,
    DARK_PRIMARY_COLOR,
    LIGHT_SECONDARY_COLOR,
    DARK_SECONDARY_COLOR,
} from './consts';


const variantPrimary = defineStyle((props) => {
    return {
        color: mode(LIGHT_SECONDARY_COLOR, DARK_SECONDARY_COLOR)(props),
        fontWeight: 'bold',
    }
});

const Text = defineStyleConfig({
    // The styles all Text have in common
    variants: {
        'primary': variantPrimary,
    }
});

export const Link = defineStyleConfig({
    // The styles all Text have in common
    baseStyle: {
        textDecoration: 'underline',
    },
    variants: {
        'primary': {
            ...variantPrimary,
            _hover: {
                opacity: 0.8,
                transition: 'opacity 0.3s',
            }
        },
    }
});

export const Heading = defineStyleConfig({
    // The styles all Text have in common
    variants: {
        'primary': variantPrimary,
    }
});


export default Text;