import { decreaseUserScore, getNurseList, increaseUserScore } from '@/api/users'
import { Button, Flex, Stack, Text } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

const Admin = () => {
  const [data, setData] = useState<any>([])

  useEffect(() => {
    const fetchNurses = async () => {
      try {
        const res = await getNurseList()
        setData(res?.data || [])
      } catch (error:any) {
        console.log('fetchNurses', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to fetch nurses',
        })
      }
    }

    fetchNurses()
  }, [])

  const onIncrease = async (id: string) => {
    try {
      setData((prev: any) =>
        prev.map((team: any) => (team.id === id ? { ...team, point: team.point + 1 } : team))
      )
      await increaseUserScore(id)
    } catch (error: any) {
      console.log('onIncrease', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to increase score',
      })
    }
  }

  const onDecrease = async (id: string) => {
    try {
      setData((prev: any) =>
        prev.map((team: any) => (team.id === id ? { ...team, point: Math.max(team.point - 1, 0) } : team))
      )
      await decreaseUserScore(id)
    } catch (error: any) {
      console.log('onDecrease', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to decrease score',
      })
    }
  }

  return (
    <Flex width="100%" align="center" justify="center" flexDirection="column" gap="28px">
      <Text margin={0} fontSize={120} textAlign="center" fontWeight={800} color="white" lineHeight={1}>
        <span>Admin</span>
      </Text>
      <Stack marginTop="20px" gap={10}>
        {data.map((item: any) => (
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
