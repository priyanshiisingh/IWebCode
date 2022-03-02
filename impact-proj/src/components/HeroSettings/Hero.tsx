import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Image,
  Button,
  Icon,
  IconProps,
} from "@chakra-ui/react";
import "./hero.css";

export default function Hero() {
  return (
    <Container maxW={"100%"} bg={"#008374"} pt={"15rem"}>
      <Stack textAlign={"center"} align={"center"}>
        <Heading
          fontWeight={700}
          fontSize={{ base: "3xl", md: "5xl" }}
          font-family={"Montserrat"}
          color={"white"}
          maxW={"600px"}>
          Let's growth your business with us
        </Heading>
        <Text color={"rgba(255, 255, 255, 0.8)"} maxW={"520px"}>
          Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti
          iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam
          minima quo, consequuntur
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"4px"}
            px={"30px"}
            py={"25px"}
            colorScheme={"teal"}
            fontWeight={"400"}
            font-family={"Open Sans"}
            bg={"#f85a40"}
            _hover={{ bg: "#f85a40" }}
            mt={"30px"}>
            Get In Touch
          </Button>
          <Image
            src="https://untree.co/demos/impact/images/persons-group-1.png"
            alt="image1"
            height="100%"
            className="person1"
          />
          <Image
            src="https://untree.co/demos/impact/images/persons-group-2.png"
            alt="image2"
            height="100%"
            className="person2"
          />
        </Stack>
      </Stack>
    </Container>
  );
}
