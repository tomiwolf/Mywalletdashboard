import { Box } from "@chakra-ui/react";

export default function Customcontainer({children}){
    return (
        <Box bg="gray.100" width="full" height="full" px="20" py="10" rounded="lg" shadow="lg" textAlign="left">
            {children}
        </Box>
    )
}