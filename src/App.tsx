import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Input,
  theme,
  HStack,
  Button,
  Flex,
  Image,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import User from "./components/user"
import axios from "axios"

export const App = () => {
  const [code, setCode] = React.useState("")

  const getCode = async () => {
    try {
      const data = await axios.get('URL')
      console.log(data);
      // setCode(data) 
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <ChakraProvider theme={theme}>
      <img
       src={"/assets/logo.svg"}
       alt="Logo"
       style={{
         width: "80px",
         height: "80px",
         maxWidth: "100%",
         maxHeight: "100%",
         position:"absolute",
         left: 20,
         margin: "0 auto", // Center the image horizontally
       }}
     />
    <Box bg="#02042A" minHeight="100vh" display="flex" alignItems="center" justifyContent="center">
      <Flex p={20} flexDirection={"column"}>
        <HStack mb={10} mt={10}>
          <Input
            placeholder="Enter coupon code"
            value={code}
            color={"white"}
            width={{ base: "100%", lg: "100%" }} 
            onChange={(e) => {
            setCode(e.target.value);
            }}
          />
          <Button onClick={getCode}>Get details</Button>
        </HStack>
        {/* Your additional content goes here */}
        <User />
      </Flex>
    </Box>
  </ChakraProvider>
)
  }