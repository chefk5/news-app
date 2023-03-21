import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text
} from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { saveCredentials } from 'redux/newsSlice'

const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [apiToken, setApiToken] = useState<string>('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (email.length > 0 && apiToken.length > 5) {
      console.log('login')
      dispatch(saveCredentials({ email: email, token: apiToken }))
      navigate('/main')
    }
  }

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
