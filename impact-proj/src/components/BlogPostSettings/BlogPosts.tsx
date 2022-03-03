import BlogPost from "./BlogPost";
import { Box, SimpleGrid, Stack, HStack } from "@chakra-ui/react";

const BlogPosts = () => {
  return (
    <Box pr={{ lg: "50px", xl: "155px" }} pl={{ lg: "50px", xl: "155px" }}>
      <HStack>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <BlogPost />
          <BlogPost />
          <BlogPost />
        </SimpleGrid>
      </HStack>
    </Box>
  );
};

export default BlogPosts;

// <Box p={4} width={{ lg: "80%" }} borderRadius={"8px"}>
// <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
