import { customGradient } from "@/app/theme";
import { Flex, Box, Input, Button } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import logo from "@/assets/footerLogo.png";

export default function FooterContact() {
  return (
    <Flex
      style={{ background: customGradient }}
      h={{ base: "50dvh", md:'35dvh', xl: "12dvh" }}
      w={"100dvw"}
      position={"relative"}
      flexDir={{ base: "column", xl: "row" }}
    >
      <Flex
        position={"relative"}
        w={{ base: "80%", lg: "50%", "2xl": "20%" }}
        h={{ base: "30%", xl: "94%" }}
        zIndex={20}
      >
        {" "}
        <Image
          alt="RA Automoveis logo"
          src={logo}
          fill
          style={{ backgroundSize: "contain", position: "absolute" }}
        />
      </Flex>
      <Flex
        zIndex={20}
        align={"center"}
        justify={"center"}
        w={{ base: "100%", xl: "80%" }}
        h={"100%"}
        gap={{ base: "20px", xl: "10px" }}
        flexDir={{ base: "column", xl: "row" }}
      >
        <Input
          w={{ base: "90%", xl: "30%" }}
          placeholder="Digite seu nome"
          bg={"light"}
          borderRadius={"20px"}
          borderColor={"primary"}
          borderWidth={"2px"}
        />
        <Input
          w={{ base: "90%", xl: "30%" }}
          placeholder="Seu e-mail"
          bg={"light"}
          borderRadius={"20px"}
          borderColor={"primary"}
          borderWidth={"2px"}
        />
        <Button
          w={{ base: "90%", xl: "25%" }}
          py={{base: '', md:'25px', xl:'0px'}}
          fontStyle={"italic"}
          color={"light"}
          bg={"primary"}
          borderRadius={"20px"}
          marginLeft={{xl:"20px"}}
        >
          ENTRAR EM CONTATO
        </Button>
      </Flex>
      <Box
        position={"absolute"}
        w={"100%"}
        h={"10%"}
        bottom={0}
        bg={"primary"}
        zIndex={10}
      />
    </Flex>
  );
}
