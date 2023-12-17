import React, { useState, useEffect } from 'react'
import { Flex, VStack, Button, Table, Tbody, Tr, Td, Skeleton, useColorModeValue, Box } from "@chakra-ui/react";
import axios, { AxiosResponse } from 'axios';

const User = () => {
 // Background color for even rows
 const bgColor = useColorModeValue("#02042A", "gray.700");
 // Background color for odd rows
 const bgAlternateColor = useColorModeValue("#03044C", "gray.600");
 const textColor = "white";
 const tableBorderColor = "white";
    
  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <VStack mb={5} align="left">
      <Box borderWidth="2px" borderRadius="md" borderColor={tableBorderColor}>
      <Table variant="simple" size="sm" borderColor="white">
          <Tbody>
            <Tr bg={bgColor}>
              <Td color={textColor}>Name</Td>
              <Td color={textColor}>Lokesh kabra</Td>
            </Tr>
            <Tr bg={bgAlternateColor}>
              <Td color={textColor}>Email</Td>
              <Td color={textColor}>lkabra@gmail.com</Td>
            </Tr>
            <Tr bg={bgColor}>
              <Td color={textColor}>City</Td>
              <Td color={textColor}>Jalgao</Td>
            </Tr>
            <Tr bg={bgAlternateColor}>
              <Td color={textColor}>College</Td>
              <Td color={textColor}>Raisoni</Td>
            </Tr>
            <Tr bg={bgColor}>
              <Td color={textColor}>Phone</Td>
              <Td color={textColor}>1123456780</Td>
            </Tr>
            <Tr bg={bgAlternateColor}>
              <Td color={textColor}>Code</Td>
              <Td color={textColor}>12345</Td>
            </Tr>
          </Tbody>
        </Table>
        </Box>
      </VStack>
    </Flex>
  )
}

export default User