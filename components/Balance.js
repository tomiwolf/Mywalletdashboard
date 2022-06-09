import { Button, Divider, Text } from "@chakra-ui/react";
import { useERC20Balances,useMoralisWeb3Api, useNativeBalance } from "react-moralis";
import { useEffect, useState } from "react";
import Customcontainer from "./CustomContainer";
import Moralis from "moralis";


export default function Balance ({user}){

    const Web3Api = useMoralisWeb3Api()

    const {fetchERC20Balances, data} = useERC20Balances()

    const [ethBalance, setEthBalance]= useState(0)

    const fetchNativeBalance = async()=>{
        const result = await Web3Api.account.getNativeBalance({
            chain: "rinkeby",
            address: user.get('ethAddress')
        })
        if(result.balance){
            setEthBalance(Moralis.Units.FromWei(result.balance))
        }
    }
    useEffect(()=>{
        fetchNativeBalance()
        fetchERC20Balances({
            params: {
                chain: "rinkeby",
                address: user.get('ethAddress')
            }
        })
    },[])
    


    return(
        <Customcontainer>
            <Text mb="6" fontSize="xl" fontWeight="bold"  >My ERC20 Tokens</Text>
            {ethBalance && <Text>💰 {ethBalance}<b> ETH</b></Text>}
            <Divider colorScheme="black"></Divider>
            {data && data.map(token => (
                <div key={token.symbol}>
                    <Text>💰 {Moralis.Units.FromWei(token.balance)} <b>{token.symbol}</b></Text>
                    <Divider></Divider>
                </div>
            ))}
            
        </Customcontainer>
    )
}