import React, { useState } from 'react';
import { Input, Button, Flex, Text } from '@chakra-ui/react';

const PlayerCalculator = ({ name, input, setInput }) => {
  const [result, setResult] = useState('8000');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '<') {
      setInput((prevInput) => prevInput.slice(0, -1));
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const reset = () => {
    setInput('8000');
    setResult('8000');
  }

  return (
    <Flex direction="column" align="center" mt={10} bg="blue.100" p="3">
      <Text fontSize="2xl" mb={4}>
        {name}
      </Text>
      <Input type="text" value={input} readOnly mb={4} bg="white" />
      <Flex>
        {[7, 8, 9, '/'].map((value) => (
          <Button key={value} onClick={() => handleButtonClick(value)} mr={2}>
            {value}
          </Button>
        ))}
      </Flex>
      <Flex>
        {[4, 5, 6, '*'].map((value) => (
          <Button key={value} onClick={() => handleButtonClick(value)} mr={2}>
            {value}
          </Button>
        ))}
      </Flex>
      <Flex>
        {[1, 2, 3, '-'].map((value) => (
          <Button key={value} onClick={() => handleButtonClick(value)} mr={2}>
            {value}
          </Button>
        ))}
      </Flex>
      <Flex>
        {[0, '.', '=', '+'].map((value) => (
          <Button key={value} onClick={() => handleButtonClick(value)} mr={2}>
            {value}
          </Button>
        ))}
      </Flex>
      <Flex>
        <Button onClick={() => handleButtonClick("00")} mr={2}>
          00
        </Button>
        <Button onClick={() => handleButtonClick("<")} mr={2}>
          {"<"}
        </Button>
        <Button onClick={() => handleButtonClick('C')}>C</Button>
      </Flex>
      <Flex>
        <Button onClick={() => reset()}>R</Button>
      </Flex>
      <Text mt={4}>Result: {result}</Text>
    </Flex>
  );
};

export default PlayerCalculator;
