import { ChakraProvider } from '@chakra-ui/react'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }) {
  return(
    <ChakraProvider>
      {/* <MoralisProvider appId={process.env.NEXT_PUBLIC_APPid} serverUrl={process.env.NEXT_PUBLIC_Server_URL}> */}
      <MoralisProvider appId={IYWSbIXRzNtjErC92zo2mXVJLq18c3oiQ8w6igV4} serverUrl={"https://usb79g3kxs9t.usemoralis.com:2053/server"}>

        <Component {...pageProps}/>
      </MoralisProvider>

    </ChakraProvider>

  )
  
}

export default MyApp
