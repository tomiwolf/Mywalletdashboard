import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";

export default function Header ({user, logout, isLoggingOut}){ 
    return(
      <header>
          <Flex color="white" bgGradient="linear(to-l,purple.500, teal.300)" justifyContent="space-between" px="10" py="6" variant="enclosed">
              <Center>
                  <Text fontSize="xl" fontWeight="bold">My wallet Dashboard</Text>
              </Center>
              <Center>
                  <Text>{user.getUsername()}</Text>
                  <Button ml="4" colorScheme="red"  onClick={logout} disabled={isLoggingOut}>Logout</Button>
              </Center>
          </Flex>
      </header>
    )
}