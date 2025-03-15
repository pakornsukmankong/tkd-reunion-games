import { Box, Text } from "@chakra-ui/react"

const Ads = () => {
  return (
    <>
      <Box position='absolute' width='30%' >
        <a
          href="https://www.sbobetonline24.com/%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2-sbobet/"
          target="_blank"
        >
          <img
            src="https://www.adorama.com/alc/wp-content/uploads/2021/05/bird-wings-flying-feature.gif"
            width="100%"
            height="200px"
          />
        </a>
      </Box>
      <Box position='absolute' width='30%' top={300}>
        <a href="https://dookeela.live/" target="_blank">
          <img
            src="https://no-cdn.shortpixel.ai/client/to_avif,q_lossy,ret_wait/https://shortpixel.com/blog/wp-content/uploads/2023/12/nyan-cat.gif"
            width="100%"
            height="200px"
          />
        </a>
      </Box>
      <Box position='absolute' width='30%' top={600} backgroundColor='red' height='200px'>
      <a href="https://dookeela.live/" target="_blank">
          <img
            src="https://dookeela.live/images/UFAC4.gif"
            width="100%"
            height="200px"
          />
        </a>
      </Box>
      <Box position='absolute' width='30%' right={0} backgroundColor='red' height='200px'>
        <Text textAlign='center' color='white' fontSize={50}>โฆษณา</Text>
      </Box>
      <Box position='absolute' width='30%' right={0} top={300} backgroundColor='red' height='200px'>
        <Text textAlign='center' color='white' fontSize={50}>โฆษณา</Text>
      </Box>
      <Box position='absolute' width='30%' right={0} top={600} backgroundColor='red' height='200px'>
        <Text textAlign='center' color='white' fontSize={50}>โฆษณา</Text>
      </Box>
    </>
  )
}

export default Ads
