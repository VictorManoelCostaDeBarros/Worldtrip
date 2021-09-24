import { Center, Flex, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { TravelTypes } from "../components/TravelTypes";
import { Divider } from "../components/Diveder";
import { Slides } from "../components/Slides";

export default function Home() {
  return (
    <Flex width="100%" flexDirection="column">
      <Header/>
      <Banner/>
      <TravelTypes/>
      <Divider />
      <Center flexDirection="column" mt="50px" mb="50px" lineHeight="25px"> 
        <Text  color="gray.600" fontWeight="600" fontSize="2xl">Vamos nessa?</Text>
        <br />
        <Text color="gray.600" fontWeight="600" fontSize="2xl">Então escolha seu continente</Text>
      </Center>
      <Flex p="2" w="100%" maxWidth="1280px" maxHeight="400px" m="2rem auto">
        <Slides/>
      </Flex>
    </Flex>
  )
}
