import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  Button,
  HStack,
  Stack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from "@chakra-ui/react";

interface BlogAuthorProps {
  date: Date;
  comments: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Text>{props.date.toLocaleDateString()}</Text>
      <Text>*</Text>
      <Text>{props.comments}</Text>
    </HStack>
  );
};

interface ArticlePostProps {
  image: any;
  heading: string;
  text: string;
}

const Article = ({ image, heading, text }: ArticlePostProps) => {
  return (
    <Container>
      <Heading as="h2" marginTop="5">
        Blog Posts
      </Heading>
      <Wrap marginTop="5">
        <WrapItem width={{ base: "100%", lg: "100%" }}>
          <Box w={{ lg: "100%" }}>
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Image src={image} alt="some text" width="100%" />
              </Link>
            </Box>
            <BlogAuthor
              date={new Date("2021-04-06T19:01:27Z")}
              comments={"12 comments"}
            />
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                {heading}
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
              {text}
            </Text>
            <Button>Read More</Button>
          </Box>
        </WrapItem>
      </Wrap>
    </Container>
  );
};

export default function ArticlePost() {}
