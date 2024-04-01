"use client"
import { Box, Flex, Heading, List, ListItem, ListIcon } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import React from 'react'

export default function Footer() {

    const navLinks = [
        {
            name:'Showroom',
            link: 'showroom'
        },{
        name:'Sobre a RA Automóveis',
        link: 'about'
    },
    {
        name:'Contato',
        link: 'contact'
    },
    {
        name:'Financimento',
        link: 'finance'
    },
]

  return (
    <Flex as={'footer'} display={'flex'} w={'100dvw'} h={'45dvh'} bg={'black'} justify={'center'} align={'center'} color={'white'}>
        <Flex display={'flex'} w={'50%'} h={'100%'} flexDir={'column'}>
            <Heading as={'h1'} color={'red'} fontStyle={'italic'}>RA AUTOMÓVEIS</Heading>
            <Flex>
            <List spacing={3}  as={'ul'}>
  <ListItem>
    <ListIcon as={CheckIcon} color='green.500' />
    Lorem ipsum dolor sit amet, consectetur adipisicing elit
  </ListItem>
  <ListItem>
    <ListIcon as={CheckIcon} color='green.500' />
    Assumenda, quia temporibus eveniet a libero incidunt suscipit
  </ListItem>
  <ListItem>
    <ListIcon as={CheckIcon} color='green.500' />
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
  </ListItem>
  {/* You can also use custom icons from react-icons */}
  <ListItem>
    <ListIcon as={CheckIcon} color='green.500' />
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
  </ListItem>
</List>
            </Flex>
        </Flex>
        <Flex display={'flex'} w={'50%'} h={'100%'} flexDir={'column'}>
        <Heading as={'h2'} color={'red'} fontStyle={'italic'}>CONTATO</Heading>
            <Flex>
            <List spacing={3}  as={'ul'}>
  <ListItem>
    <ListIcon as={CheckIcon} color='green.500' />
    Lorem ipsum dolor sit amet, consectetur adipisicing elit
  </ListItem>
  <ListItem>
    <ListIcon as={CheckIcon} color='green.500' />
    Assumenda, quia temporibus eveniet a libero incidunt suscipit
  </ListItem>
  <ListItem>
    <ListIcon as={CheckIcon} color='green.500' />
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
  </ListItem>
  {/* You can also use custom icons from react-icons */}
  <ListItem>
    <ListIcon as={CheckIcon} color='green.500' />
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
  </ListItem>
</List>
            </Flex>
        </Flex>
    </Flex>
  )
}
