import {
    Button, HStack, Link, Divider
} from '@chakra-ui/react';

import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

// Create a social media component
const SocialMedia = ({ url, Icon, size }) => {
    const iconSize = size || '2em';
    return <Link href={url} isExternal>
        <Button variant={'ghost'} p={0}><Icon size={iconSize} /></Button>
    </Link>
};

const SOCIAL_MEDIA = [
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/gagan-tunuguntla/',
        Icon: BsLinkedin
    },
    {
        name: 'Github',
        url: 'https://github.com/gugzkumar',
        Icon: BsGithub
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/gagantunuguntla/',
        Icon: BsInstagram
    },
];

// Create a empty component called "Footer" and export it
export default function Footer() {

    return <div>
            <Divider/>
            <HStack spacing={[4]} w='100%' justifyContent='center' p ={6}>
                {
                    SOCIAL_MEDIA.map((socialMedia, index) => {
                        return <SocialMedia key={index} {...socialMedia} />;
                    })
                }
            </HStack>
    </div>;
}