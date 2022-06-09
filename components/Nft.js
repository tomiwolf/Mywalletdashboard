import Customcontainer from "./CustomContainer";
import { useEffect, useState } from "react";
import { useNFTBalances } from "react-moralis";
import { Box, Button, Text, Image } from "@chakra-ui/react";


export default function Nft ({user}){

    const {getNFTBalances, data} = useNFTBalances();

    useEffect(()=>{
       getNFTBalances({
           params:{
               chain: "rinkeby",
               address: user.get('ethAddress')
           }
       })
    })

    
    
    
    return(
        <Customcontainer>
            <Text>My NFTs</Text>
            {data && data.result.map(nft=>{
                <Box mt="4" px="2" py="2" borderWidth="1px" borderRadius="2px">
                    {nft.image && <Image src={nft.image} alt=""></Image>}
                    <p>{nft.token_uri}</p>
                </Box>
            })}
            
        </Customcontainer>

    )
}