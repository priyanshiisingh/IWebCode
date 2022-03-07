import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import "./whyus.css";

interface FeatureProps {
  text: string;
  icon: any;
  content: string;
}

const Feature = ({ text, icon, content }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Stack className="whyusimage">
        <Image
          src={icon}
          alt="image"
          maxW={{ base: "45px", lg: "45px", xl: "45px" }}
        />
      </Stack>
      <Stack className="whyusContent">
        <Text fontWeight={700} fontSize={"20px"}>
          {text}
        </Text>
        <Text maxW={{ xl: "430px" }}>{content}</Text>
      </Stack>
    </Stack>
  );
};

export default function WhyUsFeature() {
  return (
    <Container
      maxW={"100%"}
      pt={"155px"}
      px={{ base: "30px", md: "50px", lg: "80px", xl: "150px" }}
      pb="50px"
      background={"#fafafa"}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={"10"}>
        <Stack spacing={4}>
          <Heading>Why you should choose us</Heading>
          <Stack spacing={4}>
            <Feature
              icon={
                "https://untree.co/demos/impact/images/svg/24-hours-support.svg"
              }
              text={"Professional"}
              content={
                "Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur."
              }
            />
            <Feature
              icon={"https://untree.co/demos/impact/images/svg/good-review.svg"}
              text={"Good Review"}
              content={
                "Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur."
              }
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            alt={"feature image"}
            src={"https://untree.co/demos/impact/images/about-us-min.png"}
            width={"100%"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
