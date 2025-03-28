import { Box, Image, Text } from '@chakra-ui/react'

const Ads = () => {
  return (
    <>
      <Box position="absolute" width="30%">
        <a href="https://www.instagram.com/twomenbagel.bkk/" target="_blank">
          <Image
            src="https://www.adorama.com/alc/wp-content/uploads/2021/05/bird-wings-flying-feature.gif"
            width="100%"
            height="200px"
          />
        </a>
      </Box>
      <Box position="absolute" width="30%" top={300}>
        <a href="https://dookeela.live/" target="_blank">
          <Image
            src="https://no-cdn.shortpixel.ai/client/to_avif,q_lossy,ret_wait/https://shortpixel.com/blog/wp-content/uploads/2023/12/nyan-cat.gif"
            width="100%"
            height="200px"
          />
        </a>
      </Box>
      <Box position="absolute" width="30%" top={600} backgroundColor="red" height="200px">
        <a href="https://www.beer789.com/th-TH/betting.aspx" target="_blank">
          <Image src="https://dookeela.live/images/UFAC4.gif" width="100%" height="200px" />
        </a>
      </Box>
      <Box position="absolute" width="30%" right={10} height="200px">
        <Image src="images/Flok-banner.png" width="100%" height="200px" objectFit='contain'/>
      </Box>
      <Box position="absolute" width="30%" right={10} top={300} backgroundColor="red" height="200px">
        <Text textAlign="center" color="white" fontSize={50}>
          โฆษณา
        </Text>
      </Box>
      <Box position="absolute" width="30%" right={10} top={600} backgroundColor="red" height="200px">
        <Text textAlign="center" color="white" fontSize={50}>
          โฆษณา
        </Text>
      </Box>
    </>
  )
}

export default Ads
