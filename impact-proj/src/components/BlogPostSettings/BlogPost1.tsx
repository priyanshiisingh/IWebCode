import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Stack,
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
import { ChevronRightIcon } from "@chakra-ui/icons";

export const BlogPost = () => {
  const cards = [
    {
      imageSrc: "https://untree.co/demos/impact/images/post_2.jpg",
      postDate: "May 27, 2021",
      likes: "12 comments",
      heading: "Important of getting a notifications",
      content:
        "Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur",
    },
    {
      imageSrc: "https://untree.co/demos/impact/images/post_3.jpg",
      postDate: "May 27, 2021",
      likes: "12 comments",
      heading: "Important of getting a notifications",
      content:
        "Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur",
    },
    {
      imageSrc: "https://untree.co/demos/impact/images/post_4.jpg",
      postDate: "May 27, 2021",
      likes: "12 comments",
      heading: "Important of getting a notifications",
      content:
        "Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur",
    },
  ];
  return (
    <Stack
      direction={{ base: "column", md: "row", xl: "row" }}
      align={"center"}>
      {cards.map((card, index) => (
        <Container mt="70px" mb={{ lg: "80px" }}>
          <Wrap>
            <WrapItem width={{ base: "100%", lg: "100%" }}>
              <Box w={{ lg: "100%" }}>
                <Box borderRadius="lg" overflow="hidden">
                  <Link
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}>
                    <Image src={card.imageSrc} alt="some text" width="100%" />
                  </Link>
                </Box>
                <HStack
                  marginTop="2"
                  display="flex"
                  alignItems="center"
                  color={"grey"}>
                  <Text>{card.postDate}</Text>
                  <Text>•</Text>
                  <Text>{card.likes}</Text>
                </HStack>

                <Heading fontSize="xl" marginTop="2">
                  <Link
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}>
                    {card.heading}
                  </Link>
                </Heading>
                <Text as="p" fontSize="md" marginTop="2">
                  {card.content}
                </Text>
                <Link textDecoration={"none"} color="#f85a40">
                  Read More <ChevronRightIcon />
                </Link>
              </Box>
            </WrapItem>
          </Wrap>
        </Container>
      ))}
    </Stack>
  );
};
