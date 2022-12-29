import './index.css';
import reactLogo from '../react-logo.svg';
import netlifyCMSLogo from '../netlify-cms-logo.svg';
import netlifyCMSLogoDark from '../netlify-cms-logo-dark.svg';
import { useColorMode } from '@chakra-ui/color-mode';

function Landing() {
    const { colorMode, toggleColorMode } = useColorMode();
    return <div className="landing-container">
        <div className='logo-container'>
            <span><img src={reactLogo} className="React-logo" alt="react logo" /></span>
            <span> + </span>
            <span><img src={colorMode==='dark' ? netlifyCMSLogoDark : netlifyCMSLogo} className="Netlify-CMS-logo" alt="netlify logo" /></span>
        </div>
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
            className="landing-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
        </a>
    </div>;
}

export default Landing;
