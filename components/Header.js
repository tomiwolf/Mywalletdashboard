import { Button, Center, Flex, Text } from "@chakra-ui/react";

export default function Header ({user, logout}){ 
    return(
      <header>
          <Flex bgGradient="linear(to-l, #7928CA, #FF0080)">
              <Center>
                  <Text>My wallet Dashboard</Text>
              </Center>
              <Center>
                  <Text>{user.getUsername()}</Text>
                  <Button colorScheme="red" onClick={logout}>Logout</Button>
              </Center>
          </Flex>
      </header>
    )
}