import blogPosts from '../cmsConfigs/posts.json';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardFooter, Heading, Image, Text, Button, Divider, ButtonGroup } from '@chakra-ui/react';
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
        <Card maxW='420px' style={{ border: "1px solid lightgrey" }}>
            <CardBody>
                <Image
                    src={image}
                    borderRadius='xl'
                    objectFit='cover'
                    mx='auto'
                />
                <Heading my='4' size='md'>
                    {title}
                </Heading>
                <Text as="i" color={'gray'}>
                    {date.toDateString()}
                </Text>
                <Text>
                    {description}
                </Text>
            </CardBody>
            <Divider></Divider>
            <CardFooter >
                <Link to={`/${filePath}`}>
                    <ButtonGroup spacing='2'>
                        <Button colorScheme='blue'>Read</Button>
                    </ButtonGroup>
                </Link>
            </CardFooter>
        </Card>
    )
}

const Blog = () => {
    return (
        <SimpleGrid spacing={[4, 8, 16]} columns={[1, 2, 2, 4]} p={[4, 8, 16]}>
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
    );
}

export default Blog;