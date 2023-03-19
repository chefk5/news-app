import {
  Box,
  Button,
  Flex,
  HStack,
  useBreakpointValue,
  VStack
} from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from 'redux/newsSlice'

const NavigationHeader = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true })
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dispatch = useDispatch()

  return (
    <>
      {isDesktop ? (
        <Flex bgColor={'black'} justifyContent="flex-end">
          <HStack
            spacing="10"
            justify="space-between"
            padding="4"
            marginRight={5}
          >
            <NavLink to="/main" className="text-slate-50">
              Home
            </NavLink>
            <NavLink to="/profile" className="text-slate-50">
              Profile
            </NavLink>
            <Button
              bgColor={'black'}
              justifyContent="center"
              textColor={'white'}
              onClick={() => dispatch(logout())}
            >
              Logout
            </Button>
          </HStack>
        </Flex>
      ) : (
        <Flex bgColor={'black'} flexDirection={'column'}>
          <HStack spacing="10" justify="flex-end" padding="2">
            <Button
              bgColor={'black'}
              justifyContent="center"
              textColor={'white'}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? 'X' : 'Menu'}
            </Button>
          </HStack>
          {isMenuOpen && (
            <Box justifyContent="center">
              <VStack spacing="5" justify="space-between" padding="2">
                <NavLink to="/main" className="text-slate-50">
                  Home
                </NavLink>
                <NavLink to="/profile" className="text-slate-50">
                  Profile
                </NavLink>
                <NavLink
                  className="text-slate-50"
                  to={'/'}
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </NavLink>
              </VStack>
            </Box>
          )}
        </Flex>
      )}
    </>
  )
}

export default NavigationHeader
