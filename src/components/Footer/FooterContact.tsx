import { customGradient } from "@/app/theme";
import { Flex, Box, Input, Button } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import logo from "@/assets/footerLogo.png";

export default function FooterContact() {
  return (
    <Flex
      style={{ background: customGradient }}
      h={{ base: "50dvh", lg: "12dvh" }}
      w={"100dvw"}
      position={"relative"}
      flexDir={{ base: "column", lg: "row" }}
    >
      <Flex
        position={"relative"}
        w={{ base: "100%", lg: "45%", xl: "20%" }}
        h={{ base: "25%", md: "40%", lg: "94%" }}
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
        w={{ base: "100%", lg: "80%" }}
        h={"100%"}
        gap={{ base: "20px", lg: "10px" }}
        flexDir={{ base: "column", lg: "row" }}
      >
        <Input
          w={{ base: "90%", lg: "30%" }}
          placeholder="Digite seu nome"
          bg={"light"}
          borderRadius={"20px"}
          borderColor={"primary"}
          borderWidth={"2px"}
        />
        <Input
          w={{ base: "90%", lg: "30%" }}
          placeholder="Seu e-mail"
          bg={"light"}
          borderRadius={"20px"}
          borderColor={"primary"}
          borderWidth={"2px"}
        />
        <Button
          fontStyle={"italic"}
          color={"light"}
          bg={"primary"}
          borderRadius={"20px"}
          marginLeft={"20px"}
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
