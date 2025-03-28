import api from '@/config/api'

export const getNurseList = async () => {
  try {
    return await api.get('/users')
  } catch (error) {
    console.log('getNurseList errror', error)
  }
}

export const increaseUserScore = async (id: string) => {
  try {
    return await api.put(`/users/${id}/points/increment`)
  } catch (error) {
    console.log('increaseUserScore errror', error)
  }
}

export const decreaseUserScore = async (id: string) => {
    try {
      return await api.put(`/users/${id}/points/decrement`)
    } catch (error) {
      console.log('increaseUserScore errror', error)
    }
  }
