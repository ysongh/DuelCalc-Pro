import React, { useState } from 'react';
import { Container, SimpleGrid, Text } from "@chakra-ui/react";
import Calculator from "../components/Calculator";
import Calculator2 from "../components/Calculator2";

function Duel() {
  const [player1Input, setPlayer1Input] = useState('8000');
  const [player2Input, setPlayer2Input] = useState('8000');

  return (
    <Container maxW='1000px'>
       <Text fontSize="2xl" mb={4} textAlign="center">
        DuelCalc Pro
      </Text>
      <SimpleGrid minChildWidth='250px' columns={3} spacing={4}>
        <Calculator
          name="Player 1"
          input={player1Input}
          setInput={setPlayer1Input}
        />
        <Calculator
          name="Player 2"
          input={player2Input}
          setInput={setPlayer2Input}
        />
        <Calculator2
          setInput1={setPlayer1Input}
          setInput2={setPlayer2Input}/>
      </SimpleGrid>
    </Container>
  )
}

export default Duel;