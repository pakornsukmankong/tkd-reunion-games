import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const LOCAL_STORAGE_KEY = 'teamInfo'

const Result = () => {
  const [teamInfo, setTeamInfo] = useState<any>([])
  const Router = useRouter()

  const goBack = () => {
    Router.back()
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedData = localStorage.getItem(LOCAL_STORAGE_KEY)
      if (storedData) {
        setTeamInfo(JSON.parse(storedData))
      }
    }
  }, [])

  return (
    <Flex width="100%" align="center" justify="center" flexDirection="column" gap="28px">
      <Text margin={0} fontSize={120} textAlign="center" fontWeight={800} color="white" lineHeight={1}>
        <span>Result</span>
      </Text>
      <Stack marginTop="20px" gap={10}>
        {teamInfo.map((item: any) => (
          <Flex key={item.id} gap={2} align="center" justifyContent="space-between">
            <Text fontSize={20} fontWeight="500">
              {item.name} :
            </Text>
            <Text fontSize={20} fontWeight="500">
              {item.point} Point
            </Text>
          </Flex>
        ))}
        <Box onClick={goBack} cursor="pointer" position="absolute" bottom={0} left={0}>
          <Image src="/images/back.png" alt="game-start" />
        </Box>
      </Stack>
    </Flex>
  )
}

export default Result
