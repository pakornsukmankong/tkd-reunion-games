import { Button, Flex, Stack, Text } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

const LOCAL_STORAGE_KEY = 'teamInfo'

const Admin = () => {
  const [teamInfo, setTeamInfo] = useState([
    { id: '1', name: 'โต๊ะ 1', point: 0 },
    { id: '2', name: 'โต๊ะ 2', point: 0 },
    { id: '3', name: 'โต๊ะ 3', point: 0 },
    { id: '4', name: 'โต๊ะ 4', point: 0 },
    { id: '5', name: 'โต๊ะ 5', point: 0 },
    { id: '6', name: 'โต๊ะ 6', point: 0 },
    { id: '7', name: 'โต๊ะ 7', point: 0 },
    { id: '8', name: 'โต๊ะ 8', point: 0 },
    { id: '9', name: 'โต๊ะ 9', point: 0 },
    { id: '10', name: 'โต๊ะ 10', point: 0 },
  ])

  // Load from localStorage only on the client-side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedData = localStorage.getItem(LOCAL_STORAGE_KEY)
      if (storedData) {
        setTeamInfo(JSON.parse(storedData))
      }
    }
  }, [])

  // Save to localStorage whenever teamInfo changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(teamInfo))
    }
  }, [teamInfo])

  const onIncrease = (id: string) => {
    setTeamInfo((prev) => prev.map((team) => (team.id === id ? { ...team, point: team.point + 1 } : team)))
  }

  const onDecrease = (id: string) => {
    setTeamInfo((prev) => prev.map((team) => (team.id === id ? { ...team, point: Math.max(team.point - 1, 0) } : team)))
  }

  return (
    <Flex width="100%" align="center" justify="center" flexDirection="column" gap="28px">
      <Text margin={0} fontSize={120} textAlign="center" fontWeight={800} color="white" lineHeight={1}>
        <span>Admin</span>
      </Text>
      <Stack marginTop="20px" gap={10}>
        {teamInfo.map((item) => (
          <Flex key={item.id} gap={2} align="center" justifyContent="space-between">
            <Text fontSize={20} fontWeight="500">
              {item.name} :
            </Text>
            <Text fontSize={20} fontWeight="500">
              {item.point} Point
            </Text>
            <Flex gap={2}>
              <Button onClick={() => onDecrease(item.id)} size="xs">
                -
              </Button>
              <Button onClick={() => onIncrease(item.id)} size="xs">
                +
              </Button>
            </Flex>
          </Flex>
        ))}
      </Stack>
    </Flex>
  )
}

export default Admin
