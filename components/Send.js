import { Button, FormControl, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text, useToast } from "@chakra-ui/react";
import Moralis from "moralis";
import { useState } from "react";
import { useMoralis, useWeb3Transfer } from "react-moralis";
import Customcontainer from "./CustomContainer";

export default function Send () {

    const [amount, setAmount] = useState(0);
    const [reciever, setReciever]= useState();

    const handleChange =(value) => setAmount(value);

    const toast = useToast()

    const {fetch, isFetching} = useWeb3Transfer({
        amount: Moralis.Units.ETH(amount),
        receiver: reciever,
        type: 'native'
    });
    return(
        <Customcontainer>
        <Text fontSize="xl" fontWeight="bold">Send ETH </Text>
        <form onSubmit={async e=>{
            e.preventDefault()
            await Moralis.enableWeb3()
            fetch({
                onSuccess:()=>{
                    toast({
                        title:' Eth was succesfully sent',
                        description: 'fresh the eth balance',
                        status:'success',
                        duration: 9000,
                        isClosable: true
                    })
                    setReciever('')
                    
                },
                onError:()=>{

                    toast({
                        title:'error.',
                        description: error,
                        status:'error',
                        duration:9000,
                        isClosable:true

                    })
                }
            })
        }}>
            <FormControl mt="4" mb="4">
                <FormLabel >Amount of ETH </FormLabel>
                <NumberInput step={0.05} onChange={handleChange} >
                    <NumberInputField id="amount" value={amount} placeholder="Amount"/>
                        <NumberInputStepper >
                             <NumberIncrementStepper/>
                             <NumberDecrementStepper/>
                        </NumberInputStepper>
                   
                </NumberInput>
                <FormLabel mt="4">Send to </FormLabel>
                <Input id="reciever" type="text" placeholder="Address" value={reciever} onChange={e=>setReciever(e.target.value)}></Input>
            </FormControl>
            <Button mt="4" type="submit" colorScheme="purple" disabled={isFetching} >💸 Send  </Button>
        </form>


        </Customcontainer>
    )
}