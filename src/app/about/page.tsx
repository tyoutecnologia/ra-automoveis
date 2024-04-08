import AboutRA from '@/components/about/AboutRA'
import AboutRicardo from '@/components/about/AboutRicardo'
import { Flex } from '@chakra-ui/react'
import React from 'react'

export default function page() {
  return (
    <Flex h={`100%`} flexDirection={'column'} bg={`dark`} gap={'40px'}>
      <AboutRicardo/>
      <AboutRA/>
    </Flex>
  )
}
