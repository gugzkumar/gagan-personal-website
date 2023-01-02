// Create a new React Component called LayeredPeakSVG that takes in a prop called color and returns the following SVG:
// Source: https://haikei.app/
import { useColorModeValue } from '@chakra-ui/color-mode';
import { scaleLinear } from 'd3-scale';
import { DARK_PRIMARY_COLOR, LIGHT_PRIMARY_COLOR } from '../../styles/consts';

// Create a functional React Component
const LayeredPeakSVG = (props) => {
    const { style, ...otherProps } = props;
    const colorScale = useColorModeValue(
        scaleLinear()
            .domain([1, 5])
            .range([LIGHT_PRIMARY_COLOR, '#FFFFFF']),
        scaleLinear()
            .domain([1, 5])
            .range([DARK_PRIMARY_COLOR, '#1A202C'])
    );

    return (
        <svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" version="1.1" style={style} {...otherProps}>
            <path d="M0 533L129 504L257 538L386 504L514 537L643 506L771 516L900 503L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z" fill={colorScale(1)}></path>
            <path d="M0 520L129 536L257 551L386 537L514 530L643 539L771 525L900 517L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z" fill={colorScale(2)}></path>
            <path d="M0 535L129 549L257 542L386 548L514 553L643 563L771 547L900 540L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z" fill={colorScale(3)}></path>
            <path d="M0 558L129 562L257 554L386 552L514 552L643 565L771 557L900 570L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z" fill={colorScale(4)}></path>
            <path d="M0 586L129 573L257 578L386 574L514 586L643 580L771 574L900 578L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z" fill={colorScale(5)}></path>
        </svg>
    );
}

// Create default props for the component
LayeredPeakSVG.defaultProps = {
    color1: '#f5730a',
    color2: '#da5b09',
    color3: '#be4407',
    color4: '#a32d04',
    color5: '#871400'
}

// Export the component
export default LayeredPeakSVG;


