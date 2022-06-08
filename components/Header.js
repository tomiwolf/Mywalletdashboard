import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";

export default function Header ({user, logout, isLoggingOut}){ 
    return(
      <header>
          <Flex color="white" bgGradient="linear(to-l,purple.500, pink.300)" justifyContent="space-between" px="10" py="6" >
              <Center>
                  <Text fontSize="xl" fontWeight="bold">My wallet Dashboard</Text>
              </Center>
              <Center>
                  <Text>{user.getUsername()}</Text>
                  <Button ml="4" colorScheme="red"  onClick={logout} disable={isLoggingOut}>Logout</Button>
              </Center>
          </Flex>
      </header>
    )
}