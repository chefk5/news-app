import { IarticleItem } from 'app/interfaces'
import React from 'react'
import ArticleItem from './ArticleItem'
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text
} from '@chakra-ui/react'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import { SerializedError } from '@reduxjs/toolkit'
type Props = {
  isMainNewsShowing: boolean
  data: IarticleItem[] | undefined
  isLoading: boolean
  isError: FetchBaseQueryError | SerializedError | undefined
  searchTerm: string
}

const ArticlesList = ({
  isMainNewsShowing,
  data,
  isLoading,
  isError,
  searchTerm
}: Props) => {
  return (
    <>
      <Text>{isMainNewsShowing ? 'Latest news' : 'searched news'}</Text>
      {isError ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          {data.length > 0 &&
            data?.map((article: IarticleItem, index: number) => (
              <ArticleItem
                key={index.toString()}
                title={article.title}
                author={article.author}
                date={article.publishedAt}
                imageUrl={article.urlToImage}
                type={isMainNewsShowing ? 'latest' : 'search'}
                term={searchTerm}
              />
            ))}
          {data.length == 0 && <>Nothing to show!</>}
        </>
      ) : null}
    </>
  )
}

export default ArticlesList
