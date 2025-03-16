import { Flex } from '@chakra-ui/react'
import Footer from '../common/Footer'

interface AppContainerProps {
  children: React.ReactNode
}

const AppContainer = (props: AppContainerProps) => {
  const { children } = props
  return (
    <>
      <Flex flexDirection="column" padding="48px">
        {children}
      </Flex>
      <Footer />
    </>
  )
}

export default AppContainer
