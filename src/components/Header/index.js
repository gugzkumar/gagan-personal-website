import './index.css';
import { Flex, Spacer, Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { Box, Heading } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const NAV_ITEMS = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'Blogs',
        href: '/posts',
    }
];


function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    return <Box
        className="header" bg={useColorModeValue('gray.200', 'gray.900')}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.100', 'gray.600')}>
        <Flex width="100%" gap="2">
            <Flex>
                <Heading className='logo' size={["xs", "sm","md"]}>
                    Create A React App With Netlify CMS
                </Heading>
            </Flex>
            <Spacer flex='1' />
            {
                NAV_ITEMS.map((navItem) =>
                    <Box key={navItem.label}>
                        <Link
                            to={navItem.href ?? '#'}
                        >
                            <Button colorScheme="blue">
                                {navItem.label}
                            </Button>
                        </Link>
                    </Box>

                )
            }

            <Button colorScheme='blue' onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
        </Flex>
    </Box>;
}

export default Header;
