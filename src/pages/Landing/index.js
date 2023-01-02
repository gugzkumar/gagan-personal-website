import './index.css';
import { Container, Stack, Image, Text, Spacer, Show } from '@chakra-ui/react';
import LayeredPeakSVG from '../../components/LayeredPeakSVG';

const NAME = 'Gagan Kumar Tunuguntla';
const ABOUT = 'I am a software engineer and this is my personal website. I blog about engineering 💻 and travel 🌎. Read my articles and check out my resume.';

function Landing() {
    return <Container maxW="container.xl" h='100%'>
        <Stack
            direction={['column-reverse', 'column-reverse', 'column-reverse', 'row']}
            justifyContent={['flex-end', undefined]}
            spacing="24px" h="100%" alignItems={'center'}
            gap={[10,10,10,0]}
        >
            <Text fontSize={['xl', 'xl', '3xl', '3xl']} maxW="500px" paddingTop={[0, 0, 0, 100]}>
                Hello 👋 my name is <Text variant='primary' fontSize={['3xl', '3xl', '5xl', '5xl']} >{NAME}.</Text> {ABOUT}
            </Text>
            <Show above="lg"><Spacer /></Show>
            <Image
                src={'images/personal_pic.jpeg'}
                alt="Picture" borderRadius={[1000, 30, 30, 30]}
                boxShadow={'xl'} 
                width={['200px', '400px', '400px', 'auto']}
                mt='15px !important'
            />
        </Stack>
    </Container>;
}

export default Landing;
