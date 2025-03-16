import { Box, Text } from "@chakra-ui/react"

const Footer = () => {
  return (
    <Box
      position="absolute"
      bottom={0}
      left="50%"
      transform="translateX(-50%)"
      width="100%"
      textAlign="center"
    >
      <Text color="white" fontSize="sm">
        This website created by Pakron Sukmankon (Floksong) &copy; {new Date().getFullYear()}. All rights reserved.
      </Text>
    </Box>
  )
}

export default Footer
