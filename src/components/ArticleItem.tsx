import { Box, Image, Link, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

interface Props {
  title: string
  author: string
  date: string
  imageUrl: string
  type: string
  term: string
}

const ArticleItem = ({ title, author, date, imageUrl, type, term }: Props) => {
  const timeConverter = (timestamp: string) => {
    const date = new Date(timestamp)
    const formattedDate = date.toLocaleString('en-US', {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
    return formattedDate
  }

  return (
    <Box
      width={'70%'}
      justifyContent="center"
      alignItems={'center'}
      borderWidth={1}
      borderRadius={5}
      borderColor={'#4c4c4c'}
      marginY={5}
      padding={5}
    >
      <Image
        src={imageUrl}
        alt={title}
        width={'100%'}
        justifyContent="center"
        alignItems={'center'}
      />
      <NavLink
        to={type == 'latest' ? `/story/${type}` : `/story/${type}/${term}`}
        state={{ title: title }}
      >
        <Text fontSize="xl" fontWeight="bold" mt={4}>
          {title}
        </Text>
      </NavLink>

      <Text fontSize="md" fontStyle="italic" mt={2}>
        By {author ? author : 'anonymous'} on {timeConverter(date)}
      </Text>
    </Box>
  )
}

export default ArticleItem
