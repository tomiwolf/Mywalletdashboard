import { Button, Flex , Text, Box, Tabs, TabList, Tab, TabPanel, TabPanels } from "@chakra-ui/react"
import Head from "next/head"
import { useMoralis } from "react-moralis"
import Balance from "../components/Balance"
import Header from "../components/Header"
import Nft from "../components/Nft"
import Profile from "../components/Profile"
import Send from "../components/Send"
import Transactions from "../components/Transactions"

export default function Home() {
const {isAuthenticated, authenticate, user, logout, isLoggingOut} = useMoralis()
 if(!isAuthenticated){
   return(
     <>
     <Head>
       <title>Login | Dashboard3</title>
     </Head>
     <Flex direction="column" 
     justifyContent="center" 
     alignItems="center"
     width="100vw"
     height="100vh"
     bgGradient="linear(to-br, teal.400, purple.300)"
     >
       <Text
       fontSize="5xl"
       fontWeight="bold"
       color="white"
       >
         Dashboard3</Text>
       <Button
         colorScheme="purple"
         size="lg"
         mt="6" 
         onClick={()=> authenticate({ signingMessage: "sign to login Dashboard3"})}
         >
        Login with Metamask</Button>
     </Flex>
     
     </>
   )
 }


  return (
    <>
    <Head>
      <title>Dashboard wallet</title>
    </Head>
    <Flex direction="column"  width="100vw" height="100vh">
      <Header user={user} logout={logout} isLoggingOut={isLoggingOut}></Header>
      <Box flex="1" bg="purple.100" px="44" py="20">
      <Tabs size="lg" colorScheme="purple" align="center" variant="enclosed">
        <TabList>
          <Tab fontWeight="bold">Profile</Tab>
          <Tab fontWeight="bold">Balance</Tab>
          <Tab fontWeight="bold">Transactions</Tab>
          <Tab fontWeight="bold">NFTS</Tab>
          <Tab fontWeight="bold">Send ETH</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Profile user={user} ></Profile>
          </TabPanel>
          <TabPanel>
            <Balance user={user}></Balance>
          </TabPanel>
          <TabPanel>
            <Transactions user={user}></Transactions>
          </TabPanel>
          <TabPanel>
            <Nft user={user}></Nft>
          </TabPanel>
          <TabPanel>
            <Send user={user}></Send>
          </TabPanel>

        </TabPanels>
      </Tabs>
      </Box>

    </Flex>
    </>
  )
}
