import React, { useState } from 'react';
import { Input, Button, Flex, Text } from '@chakra-ui/react';
import CountUp from 'react-countup';

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
    } else if (value === '<<') {
        setInput((prevInput) => prevInput.slice(0, -2));
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
      <Flex mb="2">
        <Text fontSize="2xl" mr="100px">
          {name}
        </Text>
        <Text fontSize="2xl" fontWeight="1000" color={result > 2000 ? "green" : "red"}>
          <CountUp end={result} duration={1} />
        </Text>
      </Flex>
      
      <Input type="text" value={input} readOnly mb={4} bg="white" />
      <Flex>
        {[7, 8, 9, '/'].map((value) => (
          <Button key={value} onClick={() => handleButtonClick(value)} mr={2}>
            {value}
          </Button>
        ))}
      </Flex>
      <Flex>
        {[4, 5, 6, '-'].map((value) => (
          <Button key={value} onClick={() => handleButtonClick(value)} mr={2}>
            {value}
          </Button>
        ))}
      </Flex>
      <Flex>
        {[1, 2, 3, '+'].map((value) => (
          <Button key={value} onClick={() => handleButtonClick(value)} mr={2}>
            {value}
          </Button>
        ))}
      </Flex>
      <Flex>
        {[0, '00', '=', 'C'].map((value) => (
          <Button key={value} onClick={() => handleButtonClick(value)} mr={2}>
            {value}
          </Button>
        ))}
      </Flex>
      <Flex>
        {["000", "<", "<<"].map((value) => (
          <Button key={value} onClick={() => handleButtonClick(value)} mr={2}>
            {value}
          </Button>
        ))}
        <Button onClick={() => reset()}>R</Button>
      </Flex>      
    </Flex>
  );
};

export default PlayerCalculator;
