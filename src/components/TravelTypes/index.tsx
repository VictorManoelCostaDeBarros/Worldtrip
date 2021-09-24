import { Grid, Box, Image, Text, Flex } from "@chakra-ui/react";

export function TravelTypes() {
  return (
    <Flex maxWidth="1280px" m="auto" mt="80px" justify="space-around">
      <Grid templateColumns={["repeat(1, 1fr)","repeat(3, 1fr)", "repeat(5, 1fr)"]} gap={10}>
        <Box w="130px">
          <Flex h="120px" direction="column" align="center" justify="space-between" >
            <Image src="/icons/cocktail.svg" />
            <Text fontWeight="600" color="gray.600">vida noturna</Text>
          </Flex>
        </Box>

        <Box w="130px"  align="center">
          <Flex h="120px" direction="column" align="center" justify="space-between">
            <Image src="/icons/beach.svg" />
            <Text fontWeight="600" color="gray.600">praia</Text>
          </Flex>
        </Box>

        <Box w="130px" align="center">
          <Flex h="120px" direction="column" align="center" justify="space-between">
            <Image src="/icons/moderno.svg" />
            <Text fontWeight="600" color="gray.600">moderno</Text>
          </Flex>
        </Box>

        <Box w="130px"  align="center" >
          <Flex h="120px" direction="column" align="center" justify="space-between">
            <Image src="/icons/classico.svg" />
            <Text fontWeight="600" color="gray.600">clássico</Text>
          </Flex>
        </Box>

        <Box w="130px" align="center">
          <Flex h="120px" direction="column" align="center" justify="space-between">
            <Image src="/icons/world.svg" />
            <Text fontWeight="600" color="gray.600">e mais...</Text>
          </Flex>
        </Box>
      </Grid>
    </Flex>
  )
}