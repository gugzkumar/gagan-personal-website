import blogPosts from '../cmsConfigs/posts.json';
import { Link } from 'react-router-dom';

// Sort the array of objects by date
blogPosts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
}
);

// Create a new array of objects with only the title, date, and filePath properties
const blogPostsPreview = blogPosts.map(post => {
    return {
        title: post.title,
        date: post.date,
        filePath: post.filePath
    };
}
);

// Create BlogPreview component
const BlogPreview = ({ title, date, filePath }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{date}</p>
            <Link to={filePath}>Read More</Link>
        </div>
    );
}

// Create BlogPreview components from the array of objects
const blogPreviews = blogPostsPreview.map(post => {
    return (
        <BlogPreview
            title={post.title}
            date={post.date}
            filePath={post.filePath}
        />
    );
}
);
//create Blog Component and render the blogPreviews array
const Blog = () => {
    return (
        <div>
            {blogPreviews}
        </div>
    );
}

export default Blog;