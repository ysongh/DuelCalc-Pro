import React from 'react';
import { Box, Text, List, ListItem } from "@chakra-ui/react";

const EventLog = ({ events }) => {
  return (
    <Box w="100%" mt={6} p={4} borderWidth="1px" borderRadius="lg">
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
