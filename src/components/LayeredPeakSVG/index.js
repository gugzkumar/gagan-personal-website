// Create a new React Component called LayeredPeakSVG that takes in a prop called color and returns the following SVG:
//
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
//   <path fill={color} fill-opacity="1" d="M0,128L48,122.7C96,117,192,107,288,122.7C384,139,480,181,576,197.3C672,213,768,203,864,186.7C960,171,1056,149,1152,154.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
// </svg>
//


// Create a functional React Component
const LayeredPeakSVG = (props) => {
    const { color1, color2, color3, color4, color5, style} = props;


    return (
        <svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" version="1.1" style={style}>
            <path d="M0 449L129 367L257 373L386 363L514 416L643 430L771 350L900 440L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z" fill={color1}></path>
            <path d="M0 438L129 393L257 396L386 425L514 421L643 410L771 408L900 427L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z" fill={color2}></path>
            <path d="M0 503L129 492L257 468L386 485L514 443L643 500L771 453L900 459L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z" fill={color3}></path>
            <path d="M0 521L129 531L257 533L386 543L514 540L643 501L771 497L900 524L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z" fill={color4}></path>
            <path d="M0 537L129 570L257 549L386 573L514 542L643 557L771 531L900 569L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z" fill={color5}></path>
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


