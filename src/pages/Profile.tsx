import { useState } from 'react'
import { FormLabel, FormControl, Input, Button, Box } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { saveProfileValues } from 'redux/newsSlice'
import { RootState } from 'redux/store'

interface FormData {
  name: string
  email: string
  token: string
}

const Profile = () => {
  const { name, email, token } = useSelector((state: RootState) => ({
    name: state.newsReducer.name,
    email: state.newsReducer.email,
    token: state.newsReducer.token
  }))

  const [formData, setFormData] = useState<FormData>({
    name: name,
    email: email,
    token: token
  })
  const dispatch = useDispatch()
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(saveProfileValues(formData))

    // Handle form submission here
  }

  return (
    <Box marginX={10} marginY={10}>
      <form onSubmit={handleSubmit}>
        <FormControl marginY={3}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl marginY={3}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl marginY={3}>
          <FormLabel>API Token</FormLabel>
          <Input
            type="text"
            name="token"
            value={formData.token}
            onChange={handleChange}
          />
        </FormControl>

        <Button type="submit">Save</Button>
      </form>
    </Box>
  )
}

export default Profile
