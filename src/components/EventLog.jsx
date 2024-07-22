import React from 'react';
import { Box, Text, List, ListItem } from "@chakra-ui/react";

const EventLog = ({ events }) => {
  return (
    <Box
      w="100%"
      mt={6}
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      bg="rgba(255, 255, 255, 0.1)"
      boxShadow="0 8px 32px rgba(0, 0, 0, 0.37)"
      backdropFilter="blur(10px)"
      border="1px solid rgba(255, 255, 255, 0.18)"
    >
      <Text fontSize="2xl" mb={4}>Event Log</Text>
      <List spacing={3}>
        {events.map((event, index) => (
          <ListItem key={index}>{event}</ListItem>
        ))}
      </List>
    </Box>
  );
};

export default EventLog;
