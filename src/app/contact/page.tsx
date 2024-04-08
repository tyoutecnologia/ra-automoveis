"use client"
import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import map from "@/assets/map.png";
import Forms from "@/components/forms/Forms";

export default function page() {
  return (
    <Flex
      h={`100%`}
      minH={"100dvh"}
      w={"100dvw"}
      flexDirection={"column"}
      bg={`dark`}
      gap={"40px"}
    >
      <Flex position={"relative"} h={"80dvh"} w={"100%"} zIndex={30}>
        <Image
          alt=""
          src={map}
          fill
          objectFit={"cover"}
          style={{ position: "absolute" }}
        />
      </Flex>
      <Flex>
        <Forms/>
      </Flex>
    </Flex>
  );
}
