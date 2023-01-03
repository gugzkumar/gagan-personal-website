import {
    Code, Heading, Image, Link,
    ListItem, OrderedList, Text,
    UnorderedList
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

export const getReactMarkdownComponentMap = () => {
    const reactMarkdownComponentMap = {
        h1: ({ node, ...props }) => <Heading size="xl" {...props} />,
        h2: ({ node, ...props }) => <Heading size="lg" {...props} />,
        h3: ({ node, ...props }) => <Heading size="md" {...props} />,
        h4: ({ node, ...props }) => <Heading size="b" {...props} />,
        p: ({ node, ...props }) => <Text {...props}></Text>,
        ul: ({ node, ordered, ...props }) => <UnorderedList {...props} ordered={String(ordered)} />,
        ol: ({ node, ordered, ...props }) => <OrderedList {...props} ordered={String(ordered)} />,
        li: ({ node, ordered, ...props }) => <ListItem {...props} ordered={String(ordered)} />,
        img: ({ node, ...props }) => <Image {...props} maxH={450} />,
        code: ({ node, inline, ...props }) => <Code
            inline={String(Boolean(inline))}
            p={(inline ? undefined : 4)}
            w={(inline ? undefined : '100%')}
            colorScheme='facebook'
            wordBreak={(inline ? 'break-all' : undefined)}
            {...props} />,
        pre: ({ node, ...props }) => <pre style={{ width: "100%" }} {...props} />,
        a: ({ node, href, ...props }) => {
            const isExternal = href.startsWith('http://') || href.startsWith('https://');
            return <Link
                as={isExternal ? undefined : ReactRouterLink}
                variant='primary'
                to={isExternal ? undefined : href}
                href={isExternal ? href : undefined}
                isExternal={isExternal}
                {...props} />
        }
    };

    return reactMarkdownComponentMap;
};