import STYLE_CONSTS from '../../styles/consts';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/react';

export const StyledHeader = styled(Box)`
    height: ${STYLE_CONSTS.HEADER_HEIGHT};
    width: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    .logo {
        line-height: unset;
        font-family: 'Indie Flower';
    }
`