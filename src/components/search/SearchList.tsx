import { Container } from '@mui/material'
import React, { FC } from 'react'
import SearchItem from './SearchItem'

interface ISearchList {
  profileId: string
  username: string
  email: string
  followers: string
  followees: string
  joinDate: string
  bio: string
  location: string
  website: string
  birthDate: string
  avatarUrl: string
  bannerUrl: string
}

interface ISearchListArray {
  searchedList: ISearchList[]
}

const SearchList: FC<ISearchListArray> = ({ searchedList = [] }) => {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      {searchedList.map((item: ISearchList) => {
        return <SearchItem key={item.profileId} username={item.username} />
      })}
    </Container>
  )
}

export default SearchList
