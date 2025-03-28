import { Route } from '@/config/Route'
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { sections } from './section'

const Taxi = () => {
  const Router = useRouter()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedSection, setSelectedSection] = useState('1')


  const goBack = () => {
    Router.back()
  }

  const onNextClick = () => {
    Router.push(Route.result)
  }

  const handleClickNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, getCurrentSection().length - 1))
  }

  const handleClickPrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  const getCurrentSection = () => {
    const section = sections.find((sec) => sec.name === selectedSection)
    return section ? section.items : []
  }

  const handleSectionSelect = (sectionName: any) => {
    setSelectedSection(sectionName)
    setCurrentIndex(0) // Reset index when switching sections
  }

  return (
    <Flex width="100%" align="center" justify="center" flexDirection="column" gap="28px">
      <Text margin={0} fontSize={{ md: 120 }} textAlign="center" fontWeight={800} color="white" lineHeight={1}>
        <span>TKD</span>
        <br />
        <span>TAXI</span>
      </Text>

      {/* Dynamically render section buttons */}
      <Flex gap={2}>
        {sections.map((section) => (
          <Button
            bgColor="white"
            color="black"
            border={`4px solid ${selectedSection === section.name ? 'green' : 'black'}`}
            key={section.name}
            onClick={() => handleSectionSelect(section.name)}
          >
            {section.name.toUpperCase()}
          </Button>
        ))}
      </Flex>

      <Flex width="100%" justifyContent="space-between" position="absolute" top={500} gap="24px" justify="center" align="center">
        <Button marginLeft={100} variant="outline" onClick={handleClickPrev} disabled={currentIndex === 0}>
          {'<'}
        </Button>
        <Text fontSize={{ md: 150 }} color="white">
          {getCurrentSection()[currentIndex] || '------'}
        </Text>
        <Button
          marginRight={100}
          variant="outline"
          onClick={handleClickNext}
          disabled={currentIndex === getCurrentSection().length - 1}
        >
          {'>'}
        </Button>
      </Flex>

      <iframe
        width="800"
        height="500"
        src="https://www.youtube.com/embed/BBKQvvTxyns?autoplay=1&mute=1"
        title="YouTube Video"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />

      <Box onClick={goBack} cursor="pointer" position="absolute" bottom={0} left={0}>
        <Image src="/images/back.png" alt="game-start" />
      </Box>
      <Box onClick={onNextClick} cursor="pointer" position="absolute" bottom={0} right={0}>
        <Image src="/images/next.png" alt="game-start" />
      </Box>
    </Flex>
  )
}

export default Taxi
