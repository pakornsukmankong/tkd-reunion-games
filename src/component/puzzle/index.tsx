import { Flex, Text } from '@chakra-ui/react'

const Puzzle = () => {
  return (
    <Flex width="100%" align="center" justify="center" flexDirection="column" gap="28px">
      <Text margin={0} fontSize={120} textAlign="center" fontWeight={800} color="white" lineHeight={1}>
        <span>TKD</span>
        <br />
        <span>Puzzle</span>
      </Text>
    </Flex>
  )
}

export default Puzzle
