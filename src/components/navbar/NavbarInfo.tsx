"use client";
import { Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import bg from "@/assets/navbarExtraInfo.png"

export default function NavbarInfo() {
  const pathname = usePathname();

  return pathname === "/" ? (
    <></>
  ) : (
    <Flex display={{base:'none', xl:'flex'}} h='10dvh' w={`100dvw`} justify={'flex-end'} color={'light'} bg={'dark'} zIndex={30}>
        <Flex position={'relative'} h={'80%'} w={'40%'}>
      <Image
        alt=""
        src={bg}
        fill
        objectFit={"contain"}
        objectPosition={'center'}
        style={{ position: "absolute" }}
      />
      <Flex h={'80%'} w={'100%'} justify={'center'} align={'center'} zIndex={30} >
      <Heading position={'absolute'} fontSize={'1.6rem'} fontStyle={'italic'} style={{letterSpacing: "3px"}} ml={'4dvw'}>
        {pathname === "/about" ? "SOBRE A RA AUTOMOVEIS" : pathname === "/showroom" ? "SHOWROOM" : pathname === "/contact" ? "ENTRE EM CONTATO" : pathname === "/finance" ? "OPÇÕES DE FINANCIAMENTO" : ""}
      </Heading>
      </Flex>
      </Flex>
    </Flex>
  );
}
