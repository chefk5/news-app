import React from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Text,
  Link,
  Flex
} from '@chakra-ui/react'
import NavigationHeader from 'components/NavigationHeader'
import { RootState } from 'redux/store'
import { useSelector, useDispatch } from 'react-redux'

function Main() {
  const email = useSelector((state: RootState) => state.newsReducer.email)

  return (
    <>
      <p>Main {email}</p>
    </>
  )
}

export default Main
