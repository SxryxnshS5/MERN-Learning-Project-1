import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'

import { Button, Container, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Container maxW={'1140px'} px={4}>
      <Flex
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexDir={{ base: 'column', sm: 'row' }}
      >
        <Text
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
          fontSize={{ base: '22', sm: '28' }}
          fontWeight='bold'
          textTransform={'uppercase'}
          textAlign={'center'}
        >
          <Link to='/'>Product Store 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={'center'}>
          <Link to='/create'>
            <Button></Button>
          </Link>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar
