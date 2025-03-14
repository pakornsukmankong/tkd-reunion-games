import '@/styles/globals.css'
import { ChakraProvider, createSystem, defineConfig } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

const config = defineConfig({
  theme: {
    tokens: {
      colors: {},
    },
  },
})

const system = createSystem(config)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider value={system}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
