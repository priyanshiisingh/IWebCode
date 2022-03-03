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
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from "@chakra-ui/react";

interface BlogAuthorProps {
  comments: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack
      marginTop="2"
      spacing="2"
      display="flex"
      alignItems="center"
      color={"grey"}>
      <Text>May 27, 2021</Text>
      <Text>•</Text>
      <Text>{props.comments}</Text>
    </HStack>
  );
};

const ArticleList = () => {
  return (
    <Container mt="70px" mb={{ lg: "80px" }}>
      <Wrap>
        <WrapItem width={{ base: "100%", lg: "100%" }}>
          <Box w={{ lg: "100%" }}>
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Image
                  src={"https://untree.co/demos/impact/images/post_2.jpg"}
                  alt="some text"
                  width="100%"
                />
              </Link>
            </Box>
            <BlogAuthor comments={"12 comments"} />
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                Important of getting a notifications
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
              Sapiente, assumenda suscipit autem ab expedita dignissimos,
              corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.
            </Text>
            <Link textDecoration={"none"} color="#f85a40">
              Read More
            </Link>
          </Box>
        </WrapItem>
      </Wrap>
    </Container>
  );
};

export default ArticleList;
