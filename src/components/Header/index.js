import './index.css';
import { Flex, Spacer, Button, useColorMode, useColorModeValue, Show } from '@chakra-ui/react';
import { Box, Text, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon, } from '@chakra-ui/icons';
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
        <Flex alignItems={'center'} width="100%" gap="2">
            <Flex className='logo'>
                <Text
                    as={"b"}
                    fontSize={["sm", "md", "xl"]}>
                    React App With Netlify CMS
                </Text>
            </Flex>
            <Spacer flex='1' />
            <Show above='sm'>
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
            </Show>
            <Button variant='ghost' onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Show below='sm'>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='ghost'
                    />
                    <MenuList>
                        {
                            NAV_ITEMS.map((navItem) =>
                                <Link
                                    key={navItem.label}
                                    to={navItem.href ?? '#'}
                                >
                                    <MenuItem key={navItem.label}>
                                        {navItem.label}
                                    </MenuItem>
                                </Link>

                            )
                        }
                    </MenuList>
                </Menu>
            </Show>
        </Flex>
    </Box>;
}

export default Header;
