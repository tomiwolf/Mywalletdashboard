import { ChakraProvider } from '@chakra-ui/react'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }) {
  return(
    <ChakraProvider>
      <MoralisProvider appId={process.env.NEXT_PUBLIC_APPid} serverUrl={process.env.NEXT_PUBLIC_Server_URL}>
        <Component {...pageProps}/>
      </MoralisProvider>

    </ChakraProvider>

  )
  
}

export default MyApp
