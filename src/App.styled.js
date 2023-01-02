import STYLE_CONSTS from './styles/consts';
import styled from '@emotion/styled';
const { HEADER_HEIGHT } = STYLE_CONSTS;

export const BodyContainer = styled.div`
  height: calc(100% - ${HEADER_HEIGHT});
`;