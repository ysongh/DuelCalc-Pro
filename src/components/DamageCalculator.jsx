import React, { useState } from 'react';
import { Input, Tooltip, Button, Flex, Text, Box } from '@chakra-ui/react';

const DamageCalculator = ({ setInput1, setInput2}) => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isCopy, setIsCopy] = useState(false);

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
    setIsCopy(false);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(result);
    setIsCopy(true);
  }

  const addToPlayer1 = () => {
    setInput1((prevInput) => prevInput + result);
  }

  const addToPlayer2 = () => {
    setInput2((prevInput) => prevInput + result);
  }

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
        <Text fontSize="2xl" mb={4}>
          Other
        </Text>

        <Input 
          type="text" 
          value={input} 
          readOnly 
          mb={4} 
          bg="rgba(255, 255, 200, 0.8)" 
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
          {[4, 5, 6, '*'].map((value) => (
            <Button key={value} onClick={() => handleButtonClick(value)} m={2}>
              {value}
            </Button>
          ))}
        </Flex>
        <Flex wrap="wrap" justify="center">
          {[1, 2, 3, '-'].map((value) => (
            <Button key={value} onClick={() => handleButtonClick(value)} m={2}>
              {value}
            </Button>
          ))}
        </Flex>
        <Flex wrap="wrap" justify="center">
          {[0, '.', '=', '+'].map((value) => (
            <Button key={value} onClick={() => handleButtonClick(value)} m={2}>
              {value}
            </Button>
          ))}
        </Flex>
        <Flex wrap="wrap" justify="center">
          <Button onClick={() => handleButtonClick("00")} m={2}>
            00
          </Button>
          <Button onClick={() => handleButtonClick("<")} m={2}>
            {"<"}
          </Button>
          <Button onClick={() => handleButtonClick('C')} m={2}>C</Button>
        </Flex>
        
        <Tooltip label={isCopy ? "Copied" : "Copy"} closeOnClick={false}>
          <Text mt={4} onClick={copyLink}>
            Result: {result}
          </Text>
        </Tooltip>
        <Flex>
          <Button onClick={addToPlayer1} fontSize="12px" bg="#3d6cb9" textColor="white">
            Apply to Player 1
          </Button>
          <Button onClick={addToPlayer2} fontSize="12px" bg="#49beb7" textColor="white">
            Apply to Player 2
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default DamageCalculator;