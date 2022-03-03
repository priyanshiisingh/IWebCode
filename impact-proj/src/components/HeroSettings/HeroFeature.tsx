import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Image,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import "./heroFeature.css";
import image1 from "../images/stack.png";
import image2 from "../images/devices.png";
import image3 from "../images/local_mall.png";

interface FeatureProps {
  title: string;
  text: string;
  icon: any;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        mb={1}>
        {icon}
      </Flex>
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
          icon={<Image src={image1} alt="image1" className="img" />}
          title={"Design"}
          text={
            "Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur."
          }
        />
        <Feature
          icon={<Image src={image2} alt="image2" className="img" />}
          title={"Applications"}
          text={
            "Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur."
          }
        />
        <Feature
          icon={<Image src={image3} alt="image3" className="img" />}
          title={"e-commerce"}
          text={
            "Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur."
          }
        />
      </SimpleGrid>
    </Box>
  );
}
