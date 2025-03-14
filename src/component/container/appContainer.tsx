import { Flex } from "@chakra-ui/react"

interface AppContainerProps {
  children: React.ReactNode
}

const AppContainer = (props: AppContainerProps) => {
  const { children } = props
  return <Flex flexDirection='column' padding='48px'>{children}</Flex>
}

export default AppContainer
