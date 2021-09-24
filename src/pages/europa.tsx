import { Center, Flex, Text, Box, HStack, SimpleGrid, Image } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";


export default function Europa() {
  return (
    <Flex w="100%" flexDirection="column">
      <Header canBack/>
      <Flex bgImage="url('./images/europa.png')" objectFit="cover" backgroundSize="cover" w="100%" backgroundRepeat="no-repeat" h="400px" alignItems="flex-end" pl="80px" pb="50px">
        <Text color="gray.50" fontSize="48px">Europa</Text>
      </Flex>

      <Flex w="100%" maxWidth="1200px" flexDirection={["column", "row"]} margin="80px auto"  align="center" justify="space-between">
        <Box w={["100", "50%"]} p="15px" mb="30px">
          <Text color="gray.600" fontSize="24px" lineHeight="24px" textAlign="justify">A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste</Text>
        </Box>

        <Flex w={["100", "50%"]} align="center" justifyContent="space-around"> 
          <HStack spacing="50px">
            <Flex flexDirection="column" textAlign="center">
              <Text color="yellow.400" fontSize="3xl" fontWeight="bold">50</Text>
              <Text>Países</Text>
            </Flex>

            <Flex flexDirection="column" textAlign="center">
              <Text color="yellow.400" fontSize="3xl" fontWeight="bold">60</Text>
              <Text>Línguas</Text>
            </Flex>

            <Flex flexDirection="column" textAlign="center"> 
              <Text color="yellow.400" fontSize="3xl" fontWeight="bold">27</Text>
              <Text>Cidades + 100</Text>
            </Flex>
          </HStack>
        </Flex>
      </Flex>


      <Flex w="100" maxWidth="1200px" flexDirection="column" margin="auto">
        <Text color="gray.600" fontSize="32px" mb="40px" fontWeight="semibold">Cidades + 100</Text>

        <SimpleGrid columns={[1, 2, 3, 4]} spacing="45px">
          <Box borderWidth="1px" borderRadius="lg" borderColor="yellow.400" overflow="hidden">
            <Image src="/images/places/londres.png" alt="londres" />
            <Flex p="6" flexDirection="row" textAlign="center" justify="space-between">
              <Box textAlign="left" >
                <Text>Londres</Text>
                <Text>Reino Unido</Text>
              </Box>

              <Image src="/icons/places/reinoUnido.png" w="30px" h="30px" />
            </Flex>
          </Box>

          <Box borderWidth="1px" borderRadius="lg" borderColor="yellow.400" overflow="hidden">
            <Image src="/images/places/paris.png" alt="londres" />
            <Flex p="6" flexDirection="row" textAlign="center" justify="space-between">
              <Box textAlign="left" >
                <Text>Paris</Text>
                <Text>França</Text>
              </Box>

              <Image src="/icons/places/franca.png" w="30px" h="30px" />
            </Flex>
          </Box>

          <Box borderWidth="1px" borderRadius="lg" borderColor="yellow.400" overflow="hidden">
            <Image src="/images/places/roma.png" alt="londres" />
            <Flex p="6" flexDirection="row" textAlign="center" justify="space-between">
              <Box textAlign="left" >
                <Text>Roma</Text>
                <Text>Italia</Text>
              </Box>

              <Image src="/icons/places/italia.png" w="30px" h="30px" />
            </Flex>
          </Box>

          <Box borderWidth="1px" borderRadius="lg" borderColor="yellow.400" overflow="hidden">
            <Image src="/images/places/praga.png" alt="londres" />
            <Flex p="6" flexDirection="row" textAlign="center" justify="space-between">
              <Box textAlign="left" >
                <Text>Praga</Text>
                <Text>República Tcheca</Text>
              </Box>

              <Image src="/icons/places/republicaTcheca.png" w="30px" h="30px" />
            </Flex>
          </Box>

          <Box borderWidth="1px" borderRadius="lg" borderColor="yellow.400" overflow="hidden">
            <Image src="/images/places/amsterda.png" alt="londres" />
            <Flex p="6" flexDirection="row" textAlign="center" justify="space-between">
              <Box textAlign="left" >
                <Text>Amsterdã</Text>
                <Text>Holanda</Text>
              </Box>

              <Image src="/icons/places/holanda.png" w="30px" h="30px" />
            </Flex>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
