import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { LinkS, LinkheadS } from "./footerStyles";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={"#f85a40"}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box bg={"black"} color={"white"}>
      <Box
        bg={"black"}
        color={"white"}
        pt={"60px"}
        pl={{ base: "10px", md: "30px", lg: "50px", xl: "135px" }}
        pr={{ base: "10px", md: "30px", xl: "0" }}>
        <Container as={Stack} maxW={"100%"}>
          <SimpleGrid
            templateColumns={{
              md: "1fr ",
              lg: "2fr 1fr 1fr 2fr",
              xl: "2fr 1fr 1fr 2fr",
            }}>
            <Stack
              spacing={6}
              pr={{ lg: "160px", xl: "80px" }}
              width={{
                base: "300px",
                xs: "200px",
                md: "610px",
                lg: "430px",
              }}>
              <Box>
                <Text fontWeight={"800"}>About Impact</Text>
              </Box>
              <Text fontSize={"sm"}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </Text>
              <Stack direction={"row"}>
                <SocialButton label={"Twitter"} href={"#"}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={"YouTube"} href={"#"}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={"Instagram"} href={"#"}>
                  <FaInstagram />
                </SocialButton>
                <SocialButton label={"Instagram"} href={"#"}>
                  <FaInstagram />
                </SocialButton>
                <SocialButton label={"Instagram"} href={"#"}>
                  <FaInstagram />
                </SocialButton>
                <SocialButton label={"Instagram"} href={"#"}>
                  <FaInstagram />
                </SocialButton>
              </Stack>
            </Stack>
            <Stack align={"flex-start"}>
              <Stack mt={{ base: "40px", xl: "0" }}>
                <ListHeader>Links</ListHeader>
              </Stack>

              <Link href={"#"}>
                <LinkS>About us</LinkS>
              </Link>
              <Link href={"#"}>
                <LinkS>Services</LinkS>
              </Link>
              <Link href={"#"}>
                <LinkS>News</LinkS>
              </Link>
              <Link href={"#"}>
                <LinkS>Careers</LinkS>
              </Link>
              <Link href={"#"}>
                <LinkS>Contact</LinkS>
              </Link>
            </Stack>
            <Stack align={"flex-start"}>
              <Stack mt={{ base: "30px", xl: "0" }}>
                <ListHeader>Company</ListHeader>
              </Stack>
              <Link href={"#"}>
                <LinkS>About us</LinkS>
              </Link>
              <Link href={"#"}>
                <LinkS>Service</LinkS>
              </Link>
              <Link href={"#"}>
                <LinkS>News</LinkS>
              </Link>
              <Link href={"#"}>
                <LinkS>Career</LinkS>
              </Link>
              <Link href={"#"}>
                <LinkS>Contact</LinkS>
              </Link>
            </Stack>
            <Stack align={"flex-start"}>
              <Stack mt={{ base: "30px", xl: "0" }}>
                <ListHeader>Contact</ListHeader>
              </Stack>
              <Text>
                <LinkS>43 Raymouth Rd. Baltemoer, London 3910</LinkS>
              </Text>
              <Link href={"#"}>
                <LinkS>+1(123)-456-789</LinkS>
              </Link>
              <Link href={"#"}>
                <LinkS>+1(123)-456-789</LinkS>
              </Link>
              <Link href={"#"}>
                <LinkS>info@mydomain.com</LinkS>
              </Link>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
      <Stack mt={"70px"} pb={"85px"} px={{ base: "30px", lg: "0", xl: "0" }}>
        <Text textAlign={"center"}>
          <LinkS>
            Copyright ©2022. All Rights Reserved. — Designed with love by
          </LinkS>
          Untree.co • License
        </Text>
      </Stack>
    </Box>
  );
}
