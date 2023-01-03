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
        container: {

        }
    }
});

const Card = defineStyleConfig({
    baseStyle: {
        container: {
            _dark: {
                // bg: DARK_PRIMARY_COLOR,
                bg: '#606C38'
            },
            _light: {
                // bg: 'none',
                bg: '#FEFAE0'
            }
        }
    },
    variants: {
        'primary': variantPrimary,
    }
});

export default Card;