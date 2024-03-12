import { Container, Flex, Text } from "@chakra-ui/react";
import Calculator from "../components/Calculator";
import Calculator2 from "../components/Calculator2";

function Duel() {
  return (
    <Container>
      <Text fontSize="2xl" mb={4} textAlign="center">
        DuelCalc Pro
      </Text>
      <Flex gap="2">
        <Calculator name="Player 1"/>
        <Calculator name="Player 2" />
        <Calculator2 />
      </Flex>
    </Container>
  )
}

export default Duel;