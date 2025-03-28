import { Route } from '@/config/Route'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import NumberGridGame from './numberGridGame'

const Puzzle = () => {
  const Router = useRouter()

  const goBack = () => {
    Router.back()
  }

  const onNextClick = () => {
    Router.push(Route.taxi)
  }

  return (
    <Flex width="100%" align="center" justify="center" flexDirection="column" gap="28px">
      <Text margin={0} fontSize={{ md: 120 }} textAlign="center" fontWeight={800} color="white" lineHeight={1}>
        <span>TKD</span>
        <br />
        <span>Puzzle</span>
      </Text>
      <NumberGridGame/>
      <Box onClick={goBack} cursor="pointer" position="absolute" bottom={0} left={0}>
        <Image src="/images/back.png" alt="game-start" />
      </Box>
      <Box onClick={onNextClick} cursor="pointer" position="absolute" bottom={0} right={0}>
        <Image src="/images/next.png" alt="game-start" />
      </Box>
    </Flex>
  )
}

export default Puzzle
