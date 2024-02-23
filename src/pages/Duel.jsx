import { Container, Flex } from "@chakra-ui/react";
import Calculator from "../components/Calculator";

function Duel() {
  return (
    <Container>
      <Flex gap="2">
        <Calculator />
        <Calculator />
      </Flex>
    </Container>
  )
}

export default Duel;