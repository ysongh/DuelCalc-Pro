import React, { useState } from 'react';
import { Input, Button, Flex, Text } from '@chakra-ui/react';

const Calculator = ({ name }) => {
  const [input, setInput] = useState('8000');
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
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

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
        <Button onClick={() => handleButtonClick('C')}>C</Button>
      </Flex>
      <Text mt={4}>Result: {result}</Text>
    </Flex>
  );
};

export default Calculator;
