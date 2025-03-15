import '@/styles/globals.css'
import { ChakraProvider, defaultConfig, createSystem, defineConfig, mergeConfigs } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

const theme = defineConfig({
  theme: {
    tokens: {},
  },
})

const config = mergeConfigs(defaultConfig, theme)
const system = createSystem(config)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider value={system}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
