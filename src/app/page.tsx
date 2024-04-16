import Image from "next/image";
import CarBanner from "/src/assets/banner.png";
import ContactLine from "/src/assets/contactLines.png";
import AvatarViviane from "../assets/viviane.png";
import InfoDetail from "../assets/infoDetail.png";
import AvatarBruno from "../assets/bruno.png";
import AvatarJonathan from "../assets/jhonatan.png";
import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { EvaluationCard } from "@/components/EvaluationCard";
import React, { useEffect } from "react";
import CardVehicle from "@/components/ShowroomCard/Card";

export const Veiculos = [
  {
    image:
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202404/20240407/jeep-compass-2.0-16v-flex-longitude-automatico-wmimagem22051829828.jpg?s=fill&w=249&h=186&q=70",
    title: "jeep compass",
    description: "2.0 16V Flex Longitude Automático",
    price: "99.500",
    link: "https://www.webmotors.com.br/comprar/jeep/compass/20-16v-flex-longitude-automatico/4-portas/2017-2018/51539292?pos=a51539292g:&np=1",
  },
  {
    image:
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202404/20240407/toyota-yaris-1.5-16v-flex-sedan-xls-multidrive-wmimagem22013526423.jpg?s=fill&w=249&h=186&q=70",
    title: "toyota yaris",
    description: "1.5 16V Flex Sedan XLS Multidrive",
    price: "81.900",
    link: "https://www.webmotors.com.br/comprar/toyota/yaris/15-16v-flex-sedan-xls-multidrive/4-portas/2019/51539279?pos=b51539279g:&np=1",
  },
  {
    image:
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202404/20240407/fiat-mobi-1.0-evo-flex-like.-manual-wmimagem2150368945.jpg?s=fill&w=249&h=186&q=70",
    title: "fiat mobi",
    description: "1.0 EVO Flex Like. Manual",
    price: "50.500",
    link: "https://www.webmotors.com.br/comprar/fiat/mobi/10-evo-flex-like-manual/4-portas/2020-2021/51539268?pos=c51539268g:&np=1",
  },
  {
    image:
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202404/20240407/volkswagen-virtus-1.0-200-tsi-comfortline-automatico-wmimagem22162461514.jpg?s=fill&w=249&h=186&q=70",
    title: "volkswagen virtus",
    description: "1.0 200 TSI Comfortline Automático",
    price: "74.600",
    link: "https://www.webmotors.com.br/comprar/volkswagen/virtus/10-200-tsi-comfortline-automatico/4-portas/2018-2019/51539323?pos=d51539323g:&np=1",
  },
  {
    image:
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202404/20240407/hyundai-hb20s-1.0-12v-flex-vision-manual-wmimagem22112122150.jpg?s=fill&w=249&h=186&q=70",
    title: "hyundai hb20s",
    description: "1.0 12V Flex Vision Manual",
    price: "66.900",
    link: "https://www.webmotors.com.br/comprar/hyundai/hb20s/10-12v-flex-vision-manual/4-portas/2020-2021/51539309?pos=e51539309g:&np=1",
  },
  {
    image:
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202404/20240407/volkswagen-tcross-1.0-200-tsi-total-flex-comfortline-automatico-wmimagem22263445294.jpg?s=fill&w=249&h=186&q=70",
    title: "volkswagen t-cross",
    description: "1.0 200 TSI Total Flex Comfortline Automático",
    price: "120.900",
    link: "https://www.webmotors.com.br/comprar/volkswagen/t-cross/10-200-tsi-total-flex-comfortline-automatico/4-portas/2022-2023/51539338?pos=f51539338g:&np=1",
  },
  {
    image:
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202401/20240115/troller-t4-3.2-xlt-4x4-20v-turbo-intercooler-diesel-2p-manual-wmimagem21020960025.jpg?s=fill&w=249&h=186&q=70",
    title: "troller t4",
    description: "3.2 XLT 4X4 20V Turbo Intercooler Diesel 2P Manual",
    price: "188.900",
    link: "https://www.webmotors.com.br/comprar/troller/t4/32-xlt-4x4-20v-turbo-intercooler-diesel-2p-manual/2-portas/2017/49753780?pos=g49753780g:&np=1",
  },
  {
    image:
      "https://image.webmotors.com.br/_fotos/anuncionovos/gigante/2024/202404/20240407/nissan-kicks-1.6-16v-flexstart-advance-xtronic-wmimagem22214987133.jpg?s=fill&w=249&h=186&q=70",
    title: "nissan kicks",
    description: "1.6 16V Flexstart Advance Xtronic",
    price: "121.900",
    link: "https://www.webmotors.com.br/comprar/nissan/kicks/16-16v-flexstart-advance-xtronic/4-portas/2023-2024/51539327?pos=h51539327g:&np=1",
  },
];

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
  // useEffect(() => {
  //   fetch(
  //     "https://www.webmotors.com.br/api/search/car?url=https://www.webmotors.com.br/carros%2Festoque%2F%3Fidrevendedor%3D3916424&actualPage=1&displayPerPage=24&order=1&showMenu=true&showCount=true&showBreadCrumb=true&testAB=false&returnUrl=false&showResult=true&pandora=false",
  //     {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json, text/plain, */*",
  //         "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
  //         Cookie:
  //           "__rtbh.lid=%7B%22eventType%22%3A%22lid%22%2C%22id%22%3A%22vDPtig1DiCPm7LQlfKla%22%7D; at_check=true; s_plt=1.02; s_pltp=undefined; AMCVS_3ADD33055666F1A47F000101%40AdobeOrg=1; _fbp=fb.2.1712771439102.694634686; _gcl_au=1.1.1419905068.1712771439; s_cc=true; pxcts=d7c6c2bd-f762-11ee-bc41-1490087e43ba; _pxvid=d7c6b4f0-f762-11ee-bc41-1514d82e5820; __rtbh.uid=%7B%22eventType%22%3A%22uid%22%2C%22id%22%3A%22unknown%22%7D; _tgpc=23ce62d3-6b03-539c-b0d2-7ad9d45fc467; WebMotorsLastSearches=%5B%7B%22route%22%3A%22carros%2Fsp-jundiai%2Fvolkswagen%2Ftiguan%22%2C%22query%22%3A%22%3Festadocidade%3DS%25C3%25A3o%2520Paulo%2520-%2520Jundia%25C3%25AD%26tipoveiculo%3Dcarros%26anunciante%3DLoja%26marca1%3DVOLKSWAGEN%26modelo1%3DTIGUAN%26autocompleteTerm%3DVOLKSWAGEN%2520TIGUAN%22%7D%2C%7B%22route%22%3A%22carros%2Fsp-jundiai%2Fhyundai%2Fix35%22%2C%22query%22%3A%22%3Festadocidade%3DS%25C3%25A3o%2520Paulo%2520-%2520Jundia%25C3%25AD%26tipoveiculo%3Dcarros%26anunciante%3DLoja%26marca1%3DHYUNDAI%26modelo1%3DIX35%26autocompleteTerm%3DHYUNDAI%2520IX35%22%7D%5D; WebMotorsVisitor=1; WMLastFilterSearch=%7B%22car%22%3A%22carros%2Festoque%2F%3Fidrevendedor%3D3916424%26idcmpint%3Dt1%3Ac17%3Am07%3Awebmotors%3Aver-estoque-vendedor%3A%3A%22%2C%22bike%22%3A%22motos%2Festoque%22%2C%22estadocidade%22%3A%22estoque%22%2C%22lastType%22%3A%22car%22%2C%22cookie%22%3A%22v3%22%2C%22ano%22%3A%7B%7D%2C%22preco%22%3A%7B%7D%2C%22marca%22%3A%22%22%2C%22modelo%22%3A%22%22%7D; WebMotorsDataFormLeads=%7B%22dataForm%22%3A%7B%22uniqueId%22%3A51539254%2C%22listingType%22%3A%22U%22%2C%22vehicleType%22%3A%22car%22%2C%22idGuid%22%3A%2274aa74c0-7e12-4287-b6e0-85aec2cb778a%22%2C%22make%22%3A%22HONDA%22%2C%22makeId%22%3A16%2C%22model%22%3A%22FIT%22%2C%22modelId%22%3A1194%2C%22version%22%3A%221.5%20EX%2016V%20FLEX%204P%20AUTOM%C3%81TICO%22%2C%22versionId%22%3A342096%2C%22yearModel%22%3A2016%2C%22yearFabrication%22%3A2015%2C%22price%22%3A67500%2C%22storeName%22%3A%22RA%20AUTOMOVEIS%22%2C%22storeDocument%22%3A%2244372299000180%22%2C%22sellerId%22%3A3916424%2C%22sellerType%22%3A%22PJ%22%2C%22city%22%3A%22Jundia%C3%AD%22%2C%22hyundaiGroup%22%3Afalse%7D%7D; _tglksd=eyJzIjoiMDE0NzY0M2ItOTk5NS01ZTcwLTgxOTEtYjI5NGMxN2FhNjY2Iiwic3QiOjE3MTI5NDQwNzMyMzEsInNvZCI6IihkaXJlY3QpIiwic29kdCI6MTcxMjkzNzU3MTE2OSwic29kcyI6Im8iLCJzb2RzdCI:1712944073231",
  //         "sec-ch-ua":
  //           '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
  //         "sec-ch-ua-mobile": "?1",
  //         "sec-ch-ua-platform": "Android",
  //         "Sec-Fetch-Dest": "empty",
  //         "Sec-Fetch-Mode": "cors",
  //         "Sec-Fetch-Site": "same-origin",
  //         "User-Agent":
  //           "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36",
  //         "X-Channel-Id": "webmotors.buyer.mobile.ui",
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error("Error fetching data: ", error));
  // }, []);
  return (
    <Flex flexDir="column" bgColor="#282829">
      <Image
        style={{ display: "flex", width: "100%", height: "auto" }}
        src={CarBanner}
        alt="Banner de carro"
        quality={100}
      />
      <Flex
        w="100%"
        h={{ base: "150px", md: "200px" }}
        bgColor="#282829"
        pt={{ base: "20px", md: "50px" }}
        pl={{ base: "20px", md: "50px" }}
        position="relative"
      >
        <Heading
          as="h1"
          color="#fefefe"
          fontStyle="italic"
          fontSize={{ base: "1rem", md: "1.4rem" }}
          letterSpacing="1px"
          position="relative"
          zIndex={{ base: "", md: "999" }}
          w={{ base: "", md: "55%" }}
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
      <Flex
        w="100%"
        h="auto"
        bgColor="#282829"
        direction={{ base: "column", md: "row" }}
        wrap="wrap"
        justify="center"
      >
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
      <Flex
        position="relative"
        alignItems="center"
        mt="30px"
        mb="20px"
        bgColor="#282829"
      >
        <Text
          ml="30px"
          fontFamily={"Joyride"}
          position="absolute"
          fontSize={{ base: "1rem", md: "1.4rem" }}
          color="light"
        >
          confira nosso showroom
        </Text>
        <Image
          src={InfoDetail}
          alt="InfoDetail"
          quality={100}
          style={{ width: "650px", height: "70px" }}
        />
      </Flex>
      <Flex
        w="100%"
        py="20px"
        px="35px"
        borderTop="3px solid #cb3438"
        bgColor="#848688"
        direction={{ base: "column", md: "row" }}
        justifyContent="space-around"
        gap={{ base: 5, md: 0 }}
        alignItems="center"
      >
        {Veiculos.slice(0, 5).map((veiculo, index, slicedArray) => (
          <React.Fragment key={index}>
            <CardVehicle
              image={veiculo.image}
              title={veiculo.title}
              description={veiculo.description}
              price={veiculo.price}
              link={veiculo.link}
            />
            {index !== slicedArray.length - 1 && (
              <Divider
                display={{ base: "none", md: "flex" }}
                orientation="vertical"
                mx={4}
                h="320px"
                borderColor="light"
              />
            )}
          </React.Fragment>
        ))}
      </Flex>
    </Flex>
  );
}
