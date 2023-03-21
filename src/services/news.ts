import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { InewsAPIResponse } from 'app/interfaces'

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://newsapi.org/v2/' }),
  endpoints: (builder) => ({
    getLatestNews: builder.query({
      query: (token) => `top-headlines?country=us&apiKey=${token}`,
      transformResponse: (response: InewsAPIResponse) => {
        if (!response) {
          return []
        }
        return response.articles
      }
    }),
    getSearchedNews: builder.query({
      query: ({ token, term }) => `everything?q=${term}&apiKey=${token}`,
      transformResponse: (response: InewsAPIResponse) => {
        if (!response) {
          return []
        }
        return response.articles
      }
    })
  })
})

export const {
  useGetLatestNewsQuery,
  useGetSearchedNewsQuery,
  useLazyGetSearchedNewsQuery
} = newsApi
