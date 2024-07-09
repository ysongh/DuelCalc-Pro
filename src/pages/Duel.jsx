import React, { useState } from 'react';
import { Container, SimpleGrid, Button, Text } from "@chakra-ui/react";
import PlayerCalculator from "../components/PlayerCalculator";
import DamageCalculator from "../components/DamageCalculator";

function Duel() {
  const [player1Input, setPlayer1Input] = useState('8000');
  const [player2Input, setPlayer2Input] = useState('8000');

  const reset = () => {
    setPlayer1Input('8000');
    setPlayer2Input('8000');
  }

  return (
    <Container maxW='1000px'>
      <Text fontSize="4xl" mt={3} textAlign="center" fontWeight="bold">
        DuelCalc Pro
      </Text>
      <Button onClick={() => reset()} colorScheme="blue" size="lg" mt="3">
        Reset Points
      </Button>
      <SimpleGrid minChildWidth='250px' columns={3} spacing={2}>
        <PlayerCalculator
          name="Player 1"
          input={player1Input}
          setInput={setPlayer1Input}
        />
        <PlayerCalculator
          name="Player 2"
          input={player2Input}
          setInput={setPlayer2Input}
        />
        <DamageCalculator
          setInput1={setPlayer1Input}
          setInput2={setPlayer2Input}/>
      </SimpleGrid>
    </Container>
  )
}

export default Duel;