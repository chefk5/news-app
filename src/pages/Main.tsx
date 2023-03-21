import { SearchIcon } from '@chakra-ui/icons'
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react'

import ArticlesList from 'components/ArticlesList'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import {
  useGetLatestNewsQuery,
  useLazyGetSearchedNewsQuery
} from '../services/news'

function Main() {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [isMainNewsShowing, setIsMainNewsShowing] = useState<boolean>(true)
  const token = useSelector((state: RootState) => state.newsReducer.token)
  const {
    data: latestData,
    error: latestError,
    isLoading: latestLoading
  } = useGetLatestNewsQuery(token)
  const [
    getSearchedNews,
    { data: termData, error: termError, isLoading: termLoading }
  ] = useLazyGetSearchedNewsQuery()

  const handleSearch = async () => {
    if (searchTerm != '') {
      await setIsMainNewsShowing(false)
      getSearchedNews({ token: token, term: searchTerm })
    }
  }

  const handleKeyPress = (event: { key: string }) => {
    if (event.key === 'Enter' && searchTerm != '') {
      handleSearch()
    }
  }

  return (
    <>
      <Flex alignItems="center" justifyContent="center" direction={'column'}>
        <InputGroup width={'70%'} marginY={5}>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            borderColor={'#4c4c4c'}
          />
          <Button ml={2} onClick={handleSearch}>
            Search
          </Button>
        </InputGroup>
        {isMainNewsShowing && (
          <ArticlesList
            isMainNewsShowing={isMainNewsShowing}
            data={latestData}
            isError={latestError}
            isLoading={latestLoading}
            searchTerm={searchTerm}
          />
        )}
        {!isMainNewsShowing && (
          <ArticlesList
            isMainNewsShowing={isMainNewsShowing}
            data={termData}
            isError={termError}
            isLoading={termLoading}
            searchTerm={searchTerm}
          />
        )}
      </Flex>
    </>
  )
}

export default Main
