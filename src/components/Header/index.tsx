import { Center, Image, Icon, Box } from "@chakra-ui/react";
import { RiArrowLeftLine } from 'react-icons/ri'

interface HeaderProps {
  canBack?: boolean
}

export function Header({ canBack = false }: HeaderProps) {

  if(canBack) {
    return (
      <Center
      as="header"
      w="100%"
      h="20"
      justifyContent="space-between"
    >   
      <Icon as={RiArrowLeftLine} fontSize={20} ml="4"/>
      <Image src="/images/logo.svg" alt="World trip" />
      <Box></Box>
    </Center>
    )
  }

  return(
    <Center
      as="header"
      w="100%"
      h="20"
    > 
      <Image src="/images/logo.svg" alt="World trip" />
    </Center>
  )
}