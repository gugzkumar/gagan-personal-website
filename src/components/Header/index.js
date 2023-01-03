import {
    Box, Button, Flex, IconButton, Menu, MenuButton,
    MenuItem, MenuList, Show, Spacer, Text,
    useColorMode, useColorModeValue
} from '@chakra-ui/react';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import {DARK_PRIMARY_COLOR, LIGHT_PRIMARY_COLOR, HEADER_HEIGHT} from '../../styles/consts';
import { StyledHeader } from './index.styled.js';

const NAV_ITEMS = [
    // {
    //     label: 'Portfolio',
    //     href: '/portfolio',
    // },
    // {
    //     label: 'Experience',
    //     href: '/experience',
    // },
    {
        label: 'Blogs',
        href: '/blogs',
    },
];

function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    return <>
    <Box h={HEADER_HEIGHT}></Box>
    <StyledHeader
        className="header"
        bg={useColorModeValue(LIGHT_PRIMARY_COLOR, DARK_PRIMARY_COLOR)}
        zIndex={10}
    >
        <Flex alignItems={'center'} width="100%" gap="2" paddingX={[0, 0, 10, 10]}>
            <Link to={'/'}>
                <Flex className='logo' p={2}>
                    <Text
                        as={"b"}
                        // variant='primary'
                        fontSize={["md", "lg", "3xl", "4xl"]}>
                        Gagan Kumar Tunuguntla
                    </Text>
                </Flex>
            </Link>
            <Spacer flex='1' />
            <Show above='sm'>
                {
                    NAV_ITEMS.map((navItem) =>
                        <Box key={navItem.label}>
                            <Link
                                to={navItem.href ?? '#'}
                            >
                                <Button>
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
    </StyledHeader>
    </>;
}

export default Header;
