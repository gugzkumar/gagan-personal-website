import './index.css';
import {
    Button, Container, Stack, Image, Text,
    Spacer, Show, HStack, VStack, Link
} from '@chakra-ui/react';
import { getReactMarkdownComponentMap } from '../../utilities';
import ReactMarkdown from 'react-markdown';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

// Create a social media navigation bar
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

// Create a social media component
const SocialMedia = ({ url, Icon, size }) => {
    const iconSize = size || '2em';
    return <Link href={url} isExternal>
        <Button variant={'ghost'} p={0}><Icon size={iconSize} /></Button>
    </Link>
};

// Define components for markdown rendering
const COMPONENT_MAP = getReactMarkdownComponentMap();

const NAME = 'Gagan Kumar Tunuguntla';
const ABOUT = "I am a software engineer with 8+ years experience in Web Development, Data Engineering and DevOps on the cloud. I like to blog about engineering 💻 and travel 🌎. \n\n [Read my articles.](/blogs)";

function Landing() {
    return <Container
        maxW={['container.md', 'container.md', 'container.lg', 'container.xl', 'container.6xl']}
        h='100%'
    >
        <Stack
            direction={['column-reverse', 'column-reverse', 'row', 'row']}
            justifyContent={['flex-end', undefined]}
            spacing="24px"
            h="100%" alignItems='center'
            gap={[3, 10, 10, 10]}
            pb={200}
        >
            <Show below='md'>
                <HStack spacing={[4]} w='100%' justifyContent='center'>
                    {
                        SOCIAL_MEDIA.map((socialMedia, index) => {
                            return <SocialMedia key={index} {...socialMedia} />;
                        })
                    }
                </HStack>
            </Show>

            <Text as="div" fontSize={['xl', 'xl', '3xl', '3xl']}
                maxW={["500px", "500px", "500px", "500px", "600px"]}
                paddingTop={[0, 0, 0, 100]}
            >
                Hello 👋 my name is <Text as="div" variant='primary' fontSize={['3xl', '3xl', '5xl', '5xl', '6xl']} >{NAME}</Text>
                <ReactMarkdown components={COMPONENT_MAP}>{ABOUT}</ReactMarkdown>
            </Text>
            <Show above="lg"><Spacer /></Show>
            <VStack spacing={10}>
                <Image
                    src={'images/personal_pic.jpeg'}
                    alt="Picture" borderRadius={[1000, 30, 30, 30]}
                    boxShadow={'xl'}
                    width={['200px', '350px', '400px', 'auto']}
                    mt='15px !important'
                />
                <Show above='md'>
                    <HStack spacing={[4]}>
                        {
                            SOCIAL_MEDIA.map((socialMedia, index) => {
                                return <SocialMedia key={index} {...socialMedia} size='3em' />;
                            })
                        }
                    </HStack>
                </Show>
            </VStack>
        </Stack>
    </Container>;
}

export default Landing;
