import Customcontainer from "./CustomContainer";
import { Button, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useMoralis } from "react-moralis";

export default function Profile ({user}){
    const [input , setInput] = useState('')
    const {setUserData,IsUserUpdating}= useMoralis()    


    return(
      <Customcontainer> 
          <Text>👨 <b>Username: </b>{user.getUsername()}</Text>
          <Text>💵 <b>Wallet Address</b> {user.get('ethAddress')}</Text>
          <form onSubmit={e=> {
              e.preventDefault() 
              if(input.trim() !== ''){
                  setUserData({
                      username: input,
                  }).then(()=>setInput)
              }
          }}>
              <FormControl mt="6" mb="6">
                  <FormLabel htmlFor="username">Set a new username</FormLabel>
                  <Input id="username" type="text" placeholder="Your name" value={input} onChange={e => setInput(e.target.value)}></Input>
              </FormControl>
              <Button type="submit" colorScheme="blue" disabled="">Change Username</Button>
          </form>

      </Customcontainer>
    )
}