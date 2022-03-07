import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Image,
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
// import "./heroFeature.css";

interface FeatureProps {
  title: string;
  text: string;
  icon: any;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack direction={{ base: "column", lg: "row" }} m={"25px"}>
      <Stack className="whitebfimage">
        <Image src={icon} alt={"image"} w={"200px"} />
      </Stack>
      <Stack align="flex-start" className="whitebfContent">
        <Text
          fontWeight={600}
          fontSize={"20px"}
          font-family={"Montserrat"}
          color={"black"}>
          {title}
        </Text>
        <Text color={"gray.600"}>{text}</Text>
      </Stack>
    </Stack>
  );
};

export default function WhiteBgFeature() {
  return (
    <Box p={4} width={{ lg: "80%" }} borderRadius={"8px"}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={
            "https://untree.co/demos/impact/images/svg/24-hours-support.svg"
          }
          title={"Professional"}
          text={
            "Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur."
          }
        />
        <Feature
          icon={"https://untree.co/demos/impact/images/svg/good-review.svg"}
          title={"Good Reviews"}
          text={
            "Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur."
          }
        />
        <Feature
          icon={"https://untree.co/demos/impact/images/svg/quotation.svg"}
          title={"24-7 Support"}
          text={
            "Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur."
          }
        />
      </SimpleGrid>
    </Box>
  );
}
