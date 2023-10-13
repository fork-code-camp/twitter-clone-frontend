import { Container } from '@mui/material'
import React, { FC } from 'react'
import SearchItem from './SearchItem'
import { IUserInfoData } from '../tweets/types'

interface ISearchListArray {
  searchedList: IUserInfoData[]
}

const SearchList: FC<ISearchListArray> = ({ searchedList = [] }) => {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      {searchedList.map((item: IUserInfoData) => {
        return <SearchItem key={item.profileId} username={item.username} profileId={item.profileId} />
      })}
    </Container>
  )
}

export default SearchList
