import React, { useState } from 'react'
import { Box, Button, Grid, GridItem, Stack } from '@chakra-ui/react'

const imageUrl = [
  'url(/images/puzzle11.jpg)',
  'url(/images/puzzle22.jpg)',
  'url(/images/puzzle33.jpg)',
  'url(/images/puzzle44.jpg)',
  'url(/images/puzzle55.jpg)',
]

const NumberGridGame = () => {
  const [hiddenNumbers, setHiddenNumbers] = useState<any>([])

  const [imageArray, setImageArray] = useState(0)

  const handleSelect = (number: number) => {
    setHiddenNumbers((prev: any) => [...prev, number])
  }

  const handleSelectImage = (index: number) => {
    setImageArray(index)
    setHiddenNumbers([])
  }

  return (
    <>
      <Stack flexDirection="row">
        {imageUrl.map((item, index) => (
          <Button
            key={item}
            bgColor="white"
            color="black"
            border={`4px solid ${index === imageArray ? 'green' : 'black'}`}
            onClick={() => handleSelectImage(index)}
          >
            {index + 1}
          </Button>
        ))}
      </Stack>
      <Box position="relative" width="500px" height="500px" overflow="hidden">
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          background={`${imageUrl[imageArray]}`}
          backgroundSize="cover"
          backgroundPosition="center"
          zIndex={0}
        />
        <Grid templateColumns="repeat(5, 1fr)" gap={0} p={0} position="relative" zIndex={1}>
          {Array.from({ length: 25 }, (_, i) => (
            <GridItem
              key={i + 1}
              onClick={() => handleSelect(i + 1)}
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="100px"
              height="100px"
              bg={hiddenNumbers.includes(i + 1) ? 'transparent' : 'blue.500'}
              color="white"
              fontSize="2xl"
              fontWeight="bold"
              cursor="pointer"
              _hover={{ bg: hiddenNumbers.includes(i + 1) ? 'transparent' : 'blue.600' }}
              border={hiddenNumbers.includes(i + 1) ? 'none' : '1px solid'}
            >
              {!hiddenNumbers.includes(i + 1) && i + 1}
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default NumberGridGame
