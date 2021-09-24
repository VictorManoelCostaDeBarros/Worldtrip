import { Box, Flex, Text, Image, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
  const isNotMobile = useBreakpointValue({
    base: true,
    lg: false
  })

  return (
    <Flex objectFit="cover" backgroundSize="cover" w="100%" backgroundRepeat="no-repeat" bgImage="url('./images/background.png')" >
      <Flex w="100%" maxWidth={1280} margin="auto" minHeight="300px" align="center" justify="space-between" p="20px">
        <Box>
          <Text fontSize={["1.5rem","4xl"]} color="gray.50">5 Continentes, infinitas possibilidades.</Text>
          <Text fontSize={["xs", "md"]} color="gray.50">Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
        </Box>
        { !isNotMobile ? (
          <Box>
            <Image h="60" src="/images/Airplane.svg" />
          </Box>

        ) : (
          <></>
        )}
      </Flex>
      
    </Flex>
  )
}