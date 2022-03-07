import React from "react";
import { Box, Heading, Text, Stack, Container, VStack } from "@chakra-ui/react";
import { Posts } from "./Posts";

const BlogPost = () => {
  return (
    <VStack mt={"120px"}>
      <Heading>Blog Post</Heading>
      <Text
        maxW={{
          base: "180px",
          sm: "250px",
          md: "350px",
          lg: "500px",
          xl: "700px",
        }}
        align="center">
        Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti
        iusto nobis ex aperiam cumque reprehenderit consequuntur.
      </Text>
    </VStack>
  );
};

export default BlogPost;
