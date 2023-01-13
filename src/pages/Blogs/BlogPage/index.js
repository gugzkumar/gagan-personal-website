import './index.css';
import {
    Box, Center, Heading, Spinner, Text, Image, Container, VStack, Divider, Show
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import { getReactMarkdownComponentMap } from '../../../utilities';
import Footer from '../../../components/Footer';

// Define components for markdown rendering
const COMPONENT_MAP = getReactMarkdownComponentMap();

// Create simple fuctional component
const BlogPage = (props) => {
    const { blogFileName } = useParams();
    const [blogPost, setBlogPost] = useState(null);

    useEffect(() => {
        // Write a fetch request to get the blog post
        // from the server
        fetch(`/content/blogs/${blogFileName}.json`)
            .then(res => res.json())
            .then(blogPost => {
                if (blogPost['date'])
                    blogPost['date'] = new Date(blogPost['date']);
                setBlogPost(blogPost);
            })
    }, [blogFileName]);

    return (
        <>
            {
                blogPost === null ?
                    <Box height={300}>
                        <Center height='100%'>
                            <Spinner size={'xl'} />
                        </Center>
                    </Box> :
                    <Container maxW='container.xl' p={[4, 8, 16]}>
                        <VStack align={'flex-start'} className={'blog-content'} spacing={4}>
                            <div>
                                <Show above='lg'>
                                    <Image
                                        style={{ display: 'block', float: 'left', marginRight: '20px' }}
                                        src={blogPost.image}
                                        borderRadius='md'
                                        objectFit='cover'
                                        maxW={'250px'}
                                        mx={'auto'}
                                    />
                                </Show>
                                <VStack align={'flex-start'} spacing={2}>
                                    <Heading size={'xl'}>{blogPost.title}</Heading>
                                    <Text as="i" variant='primary'>{blogPost.date.toDateString()}</Text>
                                    <Text>{blogPost.description}</Text>
                                    <Show below='lg'>
                                        <Image
                                            style={{ display: 'block', float: 'left', marginRight: '20px' }}
                                            src={blogPost.image}
                                            borderRadius='md'
                                            objectFit='cover'
                                            mx={'auto'}
                                        />
                                    </Show>
                                </VStack>
                            </div>
                            <Divider />
                            <ReactMarkdown components={COMPONENT_MAP}>
                                {blogPost.body}
                            </ReactMarkdown>
                        </VStack>
                    </Container>
            }
            <Footer />
        </>
    );
}

export default BlogPage;