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

const ArticleList = () => {
  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h2" marginTop="5">
        Blog Posts
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Image
                  src={"https://untree.co/demos/impact/images/post_2.jpg"}
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                />
              </Link>
            </Box>
            <BlogAuthor
              date={new Date("2021-04-06T19:01:27Z")}
              comments={"12 comments"}
            />
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                Important of getting a notifications
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
              Sapiente, assumenda suscipit autem ab expedita dignissimos,
              corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.
            </Text>
            <Button>Read More</Button>
          </Box>
        </WrapItem>
      </Wrap>
    </Container>
  );
};

export default ArticleList;
