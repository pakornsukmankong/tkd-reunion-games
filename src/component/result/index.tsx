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
        const parsedData = JSON.parse(storedData)
        const sortedData = parsedData.sort((a: any, b: any) => b.point - a.point) // Sort by points in descending order
        setTeamInfo(sortedData)
      }
    }
  }, [])

  const renderIndex = (index: number) => {
    if (index === 0) {
      return <Image src="/images/firstMedal.png" alt="firstPrice" width="36px" height="36px" />
    }
    if (index === 1) {
      return <Image src="/images/secondMedal.png" alt="firstPrice" width="36px" height="36px" />
    }
    if (index === 2) {
      return <Image src="/images/thirdMedal.png" alt="firstPrice" width="36px" height="36px" />
    }
    return (
      <Text fontSize={20} fontWeight="500">
        {index + 1}.
      </Text>
    )
  }

  return (
    <Flex width="100%" align="center" justify="center" flexDirection="column" gap="28px">
      <Text margin={0} fontSize={120} textAlign="center" fontWeight={800} color="white" lineHeight={1}>
        <span>Result</span>
      </Text>
      <Stack marginTop="20px" gap={10}>
        {teamInfo.map((item: any, index: number) => (
          <Flex key={item.id} gap={2} align="center" justifyContent="space-between">
            {renderIndex(index)}
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
