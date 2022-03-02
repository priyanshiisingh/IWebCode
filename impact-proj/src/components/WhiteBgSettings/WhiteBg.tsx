import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Button,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import WhiteBgFeature from "./WhiteBgFeature";
// import "./whyus.css";

interface FeatureProps {
  text: string;
  icon: any;
  content: string;
}

const Feature = ({ text, icon, content }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"} mt={"25px"}>
      <Stack className="whyusimage">
        <Image src={icon} alt="image" />
      </Stack>
      <Stack className="whyusContent">
        <Text fontWeight={700} fontSize={"20px"}>
          {text}
        </Text>
        <Text>{content}</Text>
      </Stack>
    </Stack>
  );
};

export default function WhiteBg() {
  return (
    <Container maxW={"100%"}>
      <Stack align={"center"}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={"10"}
          mt={"130px"}
          mx={"150px"}
          mb={"250px"}>
          <Stack spacing={4}>
            <Heading>Why Growing Your Business is Important</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              Labore id odit sit optio, voluptas sequi nobis aliquid dignissimos
              iure recusandae vitae nam facere hic quis voluptate cum quae.
              Deserunt, harum, incidunt ex nesciunt est temporibus ipsum, vel
              rem eveniet facere et velit sunt aspernatur eaque quis, dolorem
              magnam quisquam? Facere?
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
              mt={"30px"}
              mb={"150px"}
              maxW={"fit-content"}>
              Learn More
            </Button>
          </Stack>
          <Flex>
            <Image
              alt={"feature image"}
              src={"https://untree.co/demos/impact/images/illustration-1.jpg"}
              width={"100%"}
            />
          </Flex>
        </SimpleGrid>
        <WhiteBgFeature />
      </Stack>
    </Container>
  );
}
