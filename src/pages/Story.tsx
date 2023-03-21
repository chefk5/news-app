import { Box, Image, Text } from '@chakra-ui/react'
import { IarticleItem } from 'app/interfaces'
import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { RootState } from 'redux/store'
import { useGetLatestNewsQuery, useGetSearchedNewsQuery } from 'services/news'

const Story = () => {
  const { term, type } = useParams()
  const location = useLocation()
  const token = useSelector((state: RootState) => state.newsReducer.token)

  const [currentNews, setCurrentNews] = useState<IarticleItem>()

  const { data: latestData } = useGetLatestNewsQuery(token)

  const { data: termData } = useGetSearchedNewsQuery({ token, term })

  const getCurrentNews = useCallback(() => {
    if (latestData && termData) {
      if (type === 'latest') {
        const currentNews = latestData.find(
          (news: IarticleItem) => news.title == location.state.title
        )

        setCurrentNews(currentNews)
      }

      if (type === 'search') {
        const currentNews = termData.find(
          (news: IarticleItem) => news.title == location.state.title
        )
        setCurrentNews(currentNews)
      }
    }
  }, [latestData, termData, type, location.state.title])

  useEffect(() => {
    getCurrentNews()
  }, [getCurrentNews])

  return (
    <Box justifyContent="center" alignItems={'center'} padding={5}>
      {currentNews != undefined && (
        <>
          <Image
            src={currentNews?.urlToImage}
            alt={currentNews?.title}
            width={'70%'}
          />
          <Text fontSize="xl" fontWeight="bold" mt={4}>
            {currentNews?.title}
          </Text>
          <Text fontSize="md" mt={4}>
            {currentNews?.author}
          </Text>
          <Text fontSize="md" mt={4}>
            {currentNews?.content}
          </Text>
        </>
      )}
      {currentNews == undefined && (
        <>
          <Text fontSize="xl" fontWeight="bold" mt={4}>
            Loading...
          </Text>
        </>
      )}
    </Box>
  )
}

export default Story
