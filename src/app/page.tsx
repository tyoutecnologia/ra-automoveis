import Image from "next/image";
import CarBanner from "/src/assets/banner.png";
import ContactLine from "/src/assets/contatLines.png";
import AvatarViviane from "../assets/viviane.png";
import AvatarBruno from "../assets/bruno.png";
import AvatarJonathan from "../assets/jhonatan.png";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { EvaluationCard } from "@/components/EvaluationCard";

const Avaliacoes = [
  {
    avatar: AvatarViviane,
    rating: 5,
    name: "viviane costa",
    time: "um ano atrás",
    comment:
      "Loja bonita e bem organizada ,com Ótimo atendimento e consultores de vendas super atenciosos. Veículos de excelente qualidade e procedência.Bons preços ,negociação transparente e muito satisfatória.Cumprem o que prometem. Estou 100% satisfeita!!Vale a pena conferir!",
  },
  {
    avatar: AvatarBruno,
    rating: 5,
    name: "bruno fornazari",
    time: "2 anos atrás",
    comment:
      "Atendimento personalizado, de hospitalidade sem igual! Ricardo vive o negócio da venda de carros, além de conhecer muito de automóveis! Fiquei feliz em adquirir meu novo Kwid na RA!!!",
  },
  {
    avatar: AvatarJonathan,
    rating: 5,
    name: "jhonathan rodrigues",
    time: "2 anos atrás",
    comment:
      "Muito feliz compra bem sucedida Fox em perfeitas condições, entregue a nós limpo e higienizado tudo perfeito parabéns a toda a equipe pelo atendimento e ótimo serviço prestado obrigado volto concerteza 👍👏",
  },
];
export default function Home() {
  return (
    <Flex flexDir="column">
      <Image
        style={{ display: "flex" }}
        src={CarBanner}
        alt="Banner de carro"
        quality={100}
      />
      <Flex
        w="100%"
        h="200px"
        bgColor="#282829"
        pt="50px"
        pl="50px"
        position="relative"
      >
        <Heading
          as={"h1"}
          color={"#fefefe"}
          fontStyle={"italic"}
          fontSize={"1.4rem"}
          position="relative"
          zIndex="999"
          letterSpacing={"1px"}
          w="55%"
        >
          HÁ 29 ANOS NO MERCADO VIABILIZANDO SONHOS, DE FORMA TRANSPARENTE,
          RÁPIDA E EFICIENTE. VENHA FAZER PARTE DESSA{" "}
          <Text as="span" color="primary">
            EXPERIÊNCIA!
          </Text>
        </Heading>
        <Image
          style={{
            position: "absolute",
            width: "70%",
            height: "100px",
            left: "30%",
            zIndex: "1",
            top: "90px",
          }}
          src={ContactLine}
          alt="ContactLine"
          quality={100}
        />
      </Flex>
      <Flex w="100%" h="300px" bgColor="#282829" justifyContent="center">
        {Avaliacoes.map((avaliacao, index) => (
          <EvaluationCard
            key={index}
            avatar={avaliacao.avatar}
            rating={avaliacao.rating}
            name={avaliacao.name}
            time={avaliacao.time}
            comment={avaliacao.comment}
          />
        ))}
      </Flex>
    </Flex>
  );
}
