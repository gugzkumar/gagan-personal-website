import './index.css';
import blogPosts from '../cmsConfigs/posts.json';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardFooter, Heading, Image, Text, Button, Divider, ButtonGroup, Container, Spacer, Show } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';


blogPosts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
});
const blogPostsPreview = blogPosts.map(post => {
    return {
        title: post.title,
        description: post.description,
        date: new Date(post.date),
        filePath: post.filePath,
        image: post.image
    };
});

const BlogPreview = (props) => {
    const { title, date, description, filePath, image } = props;
    return (
        <Card style={{ border: "1px solid lightgrey" }}>
            <CardBody>
                <Show above='lg'>
                    <Image
                        src={image}
                        borderRadius='xl'
                        objectFit='cover'
                        mx='auto'
                    />
                </Show>
                <Heading my={[2, 4]} size={['sm', 'md']}>
                    {title}
                </Heading>
                <Text noOfLines={[3, 5]} size={['xs', 'sm']}>
                    {description}
                </Text>
            </CardBody>
            <Divider></Divider>
            <CardFooter className='blog-preview-card-footer'>
                <ButtonGroup spacing='2'>
                    <Link to={`/${filePath}`}>
                        <Button size={['sm', 'md']} colorScheme='blue'>Read</Button>
                    </Link>
                </ButtonGroup>
                <Spacer />
                <Text as="i" color={'gray'} size={['xs', 'sm']}>
                    {date.toDateString()}
                </Text>
            </CardFooter>
        </Card>
    )
}

const Blog = () => {
    return (
        <Container maxW='container.xl'>
            <SimpleGrid spacing={[2, 8, 16]} columns={[1, 2, 2, 3]} p={[2, 8, 16]}>
                {blogPostsPreview.map(post =>
                    <BlogPreview
                        key={post.filePath}
                        title={post.title}
                        date={post.date}
                        filePath={post.filePath}
                        image={post.image}
                        description={post.description}
                    />
                )}
            </SimpleGrid>
        </Container>
    );
}

export default Blog;