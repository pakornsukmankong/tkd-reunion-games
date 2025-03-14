interface AppContainerProps {
  children: React.ReactNode
}

const AppContainer = (props: AppContainerProps) => {
  const { children } = props
  return <div>{children}</div>
}

export default AppContainer
