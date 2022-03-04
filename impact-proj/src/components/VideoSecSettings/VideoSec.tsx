import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Link,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

import { VideoModal } from "./Modal";

export default function VideoSec() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container maxW={"100%"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        justify={"center"}
        direction={{ base: "column", md: "row" }}>
        <Box
          position={"relative"}
          height={"100%"}
          p={{ lg: "30px" }}
          width={{ lg: "50%" }}
          ml={{ lg: "50px" }}>
          <IconButton
            aria-label={"Play Button"}
            icon={<PlayIcon w={"90px"} h={"90px"} />}
            variant={"solid"}
            colorScheme={"white"}
            position={"absolute"}
            left={"50%"}
            top={"50%"}
            transform={"translateX(-50%) translateY(-50%)"}
            onClick={onOpen}
          />

          <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
            <Stack background={"black"}>
              <Image
                opacity={"0.5"}
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={"https://untree.co/demos/impact/images/hero-min.jpg"}
              />
            </Stack>
          </Link>
        </Box>
        <Stack
          mr={{ lg: "50px" }}
          maxW={{ lg: "fit-content" }}
          flex={1}
          height={{ lg: "500px" }}
          align={{ lg: "center" }}
          justify={{ lg: "center" }}
          spacing={{ base: 5, md: 10 }}>
          <Stack
            align={{ lg: "flex-start" }}
            justify={"center"}
            minH={{ lg: "100%" }}
            maxW={{ lg: "75%" }}>
            <Heading fontSize={"30px"} mb={"15px"}>
              Get Started with Impact
            </Heading>
            <Text mb={"15px"}>
              Labore id odit sit optio, voluptas sequi nobis aliquid dignissimos
              iure recusandae
            </Text>
            <Text mb={"200px"}>
              <List>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#f85a40" />
                  Lorem ipsum dolor sit amet
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#f85a40" />
                  Consectetur adipiscing elit
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#f85a40" />
                  Integer molestie lorem at massa
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#f85a40" />
                  Facilisis in pretium nisl aliquet
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#f85a40" />
                  Facilisis in pretium nisl aliquet
                </ListItem>
              </List>
            </Text>
            <Button
              rounded={"4px"}
              px={"30px"}
              py={"25px"}
              colorScheme={"teal"}
              fontWeight={"400"}
              font-family={"Open Sans"}
              bg={"#f85a40"}
              _hover={{ bg: "#f85a40" }}
              mt={"45px"}
              mb={"150px"}
              maxW={"fit-content"}>
              Learn More
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

const PlayIcon = createIcon({
  displayName: "PlayIcon",
  viewBox: "0 0 58 58",
  d: "M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z",
});
