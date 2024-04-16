import React from "react";
import { Image, Box, Text, Button, Flex, Heading } from "@chakra-ui/react";
type propsCardVehicle = {
  image: any;
  title: string;
  description: string;
  price: string;
  link: string;
};
const CardVehicle = (props: propsCardVehicle) => {
  return (
    <Flex
      bg="white"
      p={4}
      w="260px"
      h="460px"
      borderRadius="20px"
      boxShadow="md"
      textAlign="center"
      flexDir="column"
      justify="center"
      alignItems="center"
    >
      <Image
        src={props.image}
        alt={props.title}
        w="220px"
        h="250px"
        mb="15px"
        borderRadius="10px"
        border="2px solid #cb3438"
      />
      <Text
        color="primary"
        fontFamily="JoyrideExt"
        fontWeight="bold"
        fontSize="16px"
      >
        {props.title}
      </Text>
      <Text
        fontSize="md"
        fontFamily="Eina"
        color="black"
        width="210px"
        fontWeight={700}
        mb={4}
      >
        {props.description}
      </Text>
      <Text fontSize="xl" mb={4} fontFamily="Joyride" color="#919497">
        r$ {props.price}
      </Text>
      <Flex
        as="a"
        className="button"
        bgColor="#CB3438"
        href={props.link}
        target="_blank"
      >
        <Text fontFamily="JoyrideExt" fontSize="15px" color="light">
          {" "}
          ver detalhes
        </Text>
      </Flex>
    </Flex>
  );
};

export default CardVehicle;
