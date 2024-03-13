import { Container, SimpleGrid, Text } from "@chakra-ui/react";
import Calculator from "../components/Calculator";
import Calculator2 from "../components/Calculator2";

function Duel() {
  return (
    <Container maxW='1000px'>
       <Text fontSize="2xl" mb={4} textAlign="center">
        DuelCalc Pro
      </Text>
      <SimpleGrid minChildWidth='250px' columns={3} spacing={4}>
        <Calculator name="Player 1"/>
        <Calculator name="Player 2" />
        <Calculator2 />
      </SimpleGrid>
    </Container>
  )
}

export default Duel;