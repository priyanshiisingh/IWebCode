import { ReactElement } from "react";
import { Box, SimpleGrid, Text, Image, Stack, Flex } from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import "./heroFeature.css";
import image1 from "../images/stack.png";
import image2 from "../images/devices.png";
import image3 from "../images/local_mall.png";
import Icon from "./IconsFolder/Icon";
import Icon2 from "./IconsFolder/Icon2";
import Icon3 from "./IconsFolder/Icon3";

interface FeatureProps {
  title: string;
  text: string;
  iconName: any;
}

const Feature = ({ title, text, iconName }: FeatureProps) => {
  return (
    <Stack className="cardStack" direction={{ base: "column", lg: "row" }}>
      <Stack>
        <Flex
          w={16}
          h={16}
          align={"flex-start"}
          justify={"center"}
          color={"white"}
          mb={-6}
          mr={3}>
          {iconName}
        </Flex>
      </Stack>
      <Stack align="flex-start">
        <Text fontWeight={600} fontSize={"20px"} font-family={"Montserrat"}>
          {title}
        </Text>
        <Text color={"gray.600"} className="hfContent">
          {text}
        </Text>
      </Stack>
    </Stack>
  );
};

export default function HeroFeature() {
  return (
    <Box
      p={4}
      bg={"#009080"}
      width={{ lg: "80%" }}
      borderRadius={"8px"}
      color={"white"}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          iconName={<Icon2 icon="layers1" size={"50px"} color="white" />}
          title={"Design"}
          text={
            "Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur."
          }
        />
        <Feature
          iconName={<Icon3 icon="phonelink" size={"50px"} color="white" />}
          title={"Applications"}
          text={
            "Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur."
          }
        />
        <Feature
          iconName={<Icon icon="local_mall" size={"50px"} color="white" />}
          title={"e-commerce"}
          text={
            "Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur."
          }
        />
      </SimpleGrid>
    </Box>
  );
}
