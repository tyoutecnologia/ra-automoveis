"use client";
import { Flex, Heading, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import CustomIcon from "../icons/CustomIcon";

export default function Footer() {
  const navLinks = [
    {
      name: "SHOWROOM",
      link: "showroom",
    },
    {
      name: "SOBRE A RA AUTOMÓVEIS",
      link: "about",
    },
    {
      name: "CONTATO",
      link: "contact",
    },
    {
      name: "FINACIAMENTO",
      link: "finance",
    },
  ];

  const contactLinks = [
    {
      description: "TEL: (11) 97432-6999",
      icon: "mynaui:telephone",
      link: "",
    },
    {
      description: "AUTOMOVEISRA@GMAIL.COM",
      icon: "ic:outline-email",
      link: "",
    },
    {
      description: "@RA.AUTOMOVEIS",
      icon: "mdi:instagram",
      link: "",
    },
    {
      description: "RUA BOM JESUS DE PIRAPORA, 3171 - VILA RAMI - JUDIAI SP",
      icon: "teenyicons:pin-outline",
      link: "",
    },
  ];

  return (
    <Flex
      as={"footer"}
      w={"100dvw"}
      h={{base:'75dvh', lg:"50dvh"}}
      maxH={'500px'}
      bg={"dark"}
      justify={{base:'evenly', lg:"center"}}
      align={"center"}
      color={"white"}
      flexDir={{base:'column', lg:'row'}}
      padding={'20px'}
    >
      <Flex
        w={{base:'100%', lg:"50%"}}
        h={{base:'50%', lg:"100%"}}
        flexDir={"column"}
        justify={{base:'start', lg:"center"}}
        align={{base:'start', lg:"center"}}
      >
        <Flex flexDir={"column"} gap={"10px"}>
          <Heading
            as={"h1"}
            color={"primary"}
            fontStyle={"italic"}
            fontSize={"1.4rem"}
            letterSpacing={"1px"}
          >
            RA AUTOMÓVEIS
          </Heading>
          <Flex>
            <List spacing={3} as={"ul"}>
              {navLinks.map((link, index) => (
                <ListItem
                  display={"flex"}
                  w={"100%"}
                  h={"1.4rem"}
                  key={index}
                  _hover={{ color: "primary" }}
                  transition={"all 0.3s ease-in-out"}
                >
                  <Link href={link.link}>
                    <Text>{link.name}</Text>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w={{base:'100%', lg:"50%"}}
        h={{base:'50%', lg:"100%"}}
        flexDir={"column"}
        justify={{base:'start', lg:"center"}}
        align={{base:'start', lg:"center"}}
      >
        <Flex flexDir={"column"} gap={"10px"}>
          <Heading
            as={"h2"}
            color={"primary"}
            fontStyle={"italic"}
            fontSize={"1.4rem"}
          >
            CONTATO
          </Heading>
          <Flex>
            <List spacing={3} as={"ul"}>
              {contactLinks.map((link, index) => (
                <ListItem
                  display={"flex"}
                  w={"100%"}
                  key={index}
                  h={"1.4rem"}
                  _hover={{ color: "primary" }}
                  transition={"all 0.3s ease-in-out"}
                >
                  <Link href={link.link}>
                    <Flex w={"100%"} align={"center"} gap={"10px"}>
                      <CustomIcon icon={link.icon} color="#CB3438" />
                      <Text>{link.description}</Text>
                    </Flex>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
