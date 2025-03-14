import { Box, Flex, Image, Text } from '@chakra-ui/react'
import Ads from '../ads'
import { keyframes } from '@emotion/react'
import { useRouter } from 'next/router'
import { Route } from '@/config/Route'

const Home = () => {
  const Router = useRouter()
  const isHidden = false

  const navigateToPuzzlePage = () => {
    Router.push(Route.puzzle)
  }

  return (
    <>
      <Flex width="100%" align="center" justify="center" flexDirection="column" gap="28px">
        <Text margin={0} fontSize={120} textAlign="center" fontWeight={800} color="white" lineHeight={1}>
          <span>Game</span>
          <br />
          <span>Battle</span>
        </Text>
        <Image src="/images/tkd-game-night.png" alt="tke-game-night" />
        <Image src="/images/heart.png" alt="heart" />
        <Box
          css={{
            animation: `${fadeInOut} 2s ease-in-out infinite`,
          }}
          cursor="pointer"
          onClick={navigateToPuzzlePage}
        >
          <Image src="/images/game-start.png" alt="game-start" />
        </Box>
        <Box cursor='pointer' position='absolute' bottom={0} left={0}>
          <Image src="/images/lolipop-left.png" alt="game-start" />
        </Box>
        <Box cursor='pointer' position='absolute' bottom={0} right={0}>
          <Image src="/images/lolipop-right.png" alt="game-start" />
        </Box>
      </Flex>
      {isHidden ? <Ads /> : null}
    </>
  )
}

const fadeInOut = keyframes`
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
`

export default Home
