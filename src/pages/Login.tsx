import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Text,
  Link
} from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { saveCredentials } from 'redux/newsSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [apiToken, setApiToken] = useState('')
  //   const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (email.length > 0 && apiToken.length > 5) {
      console.log('login')
      dispatch(saveCredentials({ email: email, token: apiToken }))
      navigate('/main') // Navigate to the "Home" screen
    }
    // Do something with the email and API token
  }

  //   const handleInputChange = (event: { target: { name: any; value: any } }) => {
  //     const { name, value } = event.target
  //     if (name === 'email') {
  //       setEmail(value)
  //     } else if (name === 'apiToken') {
  //       setApiToken(value)
  //     }
  //     setIsButtonDisabled(!email || !apiToken)
  //   }

  return (
    <Box width="400px" mx="auto" mt="8">
      <Text mb="4">
        To use this application, you need an API token from{' '}
        <Link href="https://newsapi.org/register" isExternal>
          https://newsapi.org/register
        </Link>
        .
      </Text>
      <form onSubmit={handleSubmit}>
        <FormControl id="email" mb="4">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </FormControl>
        <FormControl id="apiToken" mb="4">
          <FormLabel>API token</FormLabel>
          <Input
            type="password"
            value={apiToken}
            onChange={(event) => setApiToken(event.target.value)}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Login
        </Button>
      </form>
    </Box>
  )
}

export default Login
