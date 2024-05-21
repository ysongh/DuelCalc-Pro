import React, { useState } from 'react';
import { Input, Button, Flex, Text, Box } from '@chakra-ui/react';
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
  };

  return (
    <Flex direction="column" align="center" mt={10}>
      <Box 
        bg="rgba(255, 255, 255, 0.2)"
        borderRadius="10px"
        p={6}
        boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
        backdropFilter="blur(10px)"
        border="1px solid rgba(255, 255, 255, 0.3)"
      >
        <Flex mb="2" justify="space-between" w="100%">
          <Text fontSize="2xl" mr="100px">
            {name}
          </Text>
          <Text fontSize="2xl" fontWeight="1000" color={result > 2000 ? "green.500" : "red.500"}>
            <CountUp end={result} duration={1} />
          </Text>
        </Flex>
        
        <Input 
          type="text" 
          value={input} 
          readOnly 
          mb={4} 
          bg="rgba(255, 255, 255, 0.8)" 
          borderRadius="md" 
          boxShadow="inner"
        />
        <Flex wrap="wrap" justify="center">
          {[7, 8, 9, '/'].map((value) => (
            <Button key={value} onClick={() => handleButtonClick(value)} m={2}>
              {value}
            </Button>
          ))}
        </Flex>
        <Flex wrap="wrap" justify="center">
          {[4, 5, 6, '-'].map((value) => (
            <Button key={value} onClick={() => handleButtonClick(value)} m={2}>
              {value}
            </Button>
          ))}
        </Flex>
        <Flex wrap="wrap" justify="center">
          {[1, 2, 3, '+'].map((value) => (
            <Button key={value} onClick={() => handleButtonClick(value)} m={2}>
              {value}
            </Button>
          ))}
        </Flex>
        <Flex wrap="wrap" justify="center">
          {[0, '00', '=', 'C'].map((value) => (
            <Button key={value} onClick={() => handleButtonClick(value)} m={2}>
              {value}
            </Button>
          ))}
        </Flex>
        <Flex wrap="wrap" justify="center">
          {["000", "<", "<<"].map((value) => (
            <Button key={value} onClick={() => handleButtonClick(value)} m={2}>
              {value}
            </Button>
          ))}
          <Button onClick={() => reset()} m={2}>R</Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default PlayerCalculator;
