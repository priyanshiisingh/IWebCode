import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Button,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import "./slider.css";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-next"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-prev"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export const SliderContent = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const cards = [
    {
      name: "Maria Jones",
      designation: "Customer",
      image: "https://untree.co/demos/impact/images/person_1.jpg",
      comments:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      name: "Maria Jones",
      designation: "Customer",
      image: "https://untree.co/demos/impact/images/person_2.jpg",
      comments:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      name: "Maria Jones",
      designation: "Customer",
      image: "https://untree.co/demos/impact/images/person_3.jpg",
      comments:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
  ];
  return (
    <Box bg={"#fafafa"}>
      <div>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        <Slider {...settings}>
          {cards.map((card, index) => (
            <Box as="section" minW={"100%"} minH={{ lg: "550px" }}>
              <Box
                maxW="3xl"
                mx="auto"
                px={{ base: "6", md: "8" }}
                pt="100px"
                pb="16">
                <Flex direction="column" align="center" textAlign="center">
                  <Image
                    src={card.image}
                    mx="auto"
                    objectFit="cover"
                    w="16"
                    h="16"
                    rounded="full"
                    border="5px solid white"
                    boxShadow="30px"
                  />
                  <Box mt="3">
                    <Text as="cite" fontStyle="normal" fontWeight="bold">
                      {card.name}
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                      {card.designation}
                    </Text>
                  </Box>
                  {/* <Quotee
                  name="Marrie Jones"
                  jobTitle="Marketing Ads Strategist"
                  imageSrc="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTN8fGxhZHklMjBoZWFkc2hvdCUyMHNtaWxpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                  mt="8"
                /> */}
                  <Text
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="medium"
                    mt="6"
                    fontFamily={"Georgia, serif"}>
                    <i>&ldquo;{card.comments}&rdquo;</i>
                  </Text>
                </Flex>
              </Box>
            </Box>
          ))}
        </Slider>
      </div>
    </Box>
  );
};
