import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import Customcontainer from "./CustomContainer";
import { useEffect, useState } from "react";
import Moralis from "moralis";
import { Button, Divider, Link, Text } from "@chakra-ui/react";



export default function Transactions ({user}){

    const Web3Api = useMoralisWeb3Api()
    const [transactions, setTransactions] = useState()
    const BASE_URL = "https://rinkeby.etherscan.io/tx/"

    const fetchTransactions = async()=>{
        const data = await Web3Api.account.getTransactions({
            chain: "rinkeby",
            address: user.get('ethAddress'),
            limit: 10
        }).catch(e => console.log(e))
        if (data){
            setTransactions(data.result)
        }

    }
    useEffect(()=>{
        fetchTransactions()
    },[])

    
    
    return(
        <Customcontainer>
            <Text fontSize="small" mb="5" mt="" fontWeight="bold"> Last 10 Transactions</Text>
            {transactions && transactions.map(transaction =>(
               <div key={transaction.hash}>
               <Link textDecorationLine="underline" href={`${BASE_URL}${transaction.hash}`} isExternal>🔗  {transaction.hash}</Link>
               <Divider color="black"></Divider>
               </div> 
            ))}
        </Customcontainer>

    )
}