import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import React, {useState} from "react";
import RAInput from "./RAInput";

export default function Forms() {
    const [formData, setFormData] = useState({
        name: "",
        tel: "",
        email: "",
        message: ""
    })
  return (
    <Flex flexDirection={"column"} color={"light"} fontStyle={'italic'} paddingX={{ base: "25px", xl: "50px" }}
    paddingBottom={{ base: "20px", xl: "20px" }} textTransform={'uppercase'} fontSize={'0.8rem'}>
      <Heading color={'primary'}>CONTATO</Heading>
      <Text >Algum dos nossos veículos te interessou? </Text>
      <Text>
        Entre em contato para saber mais detalhes. Teremos o maior prazer em lhe
        atender e tirar todas as suas dúvidas.
      </Text>
      <Flex >
        <Flex flexDirection={"column"} w={'60%'} gap={'10px'}>
          <Heading fontSize={'1.4rem'}>FALE CONOSCO</Heading>
          <Flex gap={'10px'}>
            <RAInput title={'NOME'} value={formData.name}/>
            <RAInput title={'FONE'} value={formData.tel}/>
          </Flex>
          <RAInput title={'E-MAIL'} value={formData.email}/>
          <RAInput title={'MENSAGEM'} value={formData.message}  type={"textarea"}/>
          <Flex>
          <Button
          w={{ base: "90%", xl: "20%" }}
          py={{base: '', md:'25px', xl:'0px'}}
          fontStyle={"italic"}
          color={"light"}
          bg={"primary"}
          borderRadius={"20px"}
        >
          ENVIAR
        </Button>
          </Flex>
        </Flex>
        <Flex flexDirection={"column"} w={'40%'} mt={'2rem'}>
        <Text>
          Deixe aqui seu contato e sua mensagem. Retornaremos em breve para
          tirar todas as suas dúvidas ou marcar uma visita ou videochamada.
        </Text>
        <Text>
          Para nós é sempre um prazer fazer novas amizades e realizar sonhos!
        </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
