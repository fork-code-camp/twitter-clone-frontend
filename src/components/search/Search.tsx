import React, { useEffect, useState } from 'react'
import InnerSearch from '@/components/search/InnerSearch'
import SettingsSVG from '@/assets/icons/Settings.svg'
import { Box, Container } from '@mui/material'
import SearchList from '@/components/search/SearchList'
import { useForm } from 'react-hook-form'
import { ISearchInner } from './types'
import { useGetSearchUsersListQuery } from '@/query/profile/profile.query'
import { ISearchQueryData } from '@/services/types'

const Search = () => {
  const [userslist, setUserslist] = useState([])

  const [searchRequestData, setSearchRequestData] = useState<ISearchQueryData>({ username: '', page: 0, size: 11 });

  const { register, handleSubmit } = useForm<ISearchInner>();
  const { data: searchResponseData } = useGetSearchUsersListQuery(searchRequestData);

  const onSubmit = (innerData: ISearchInner) => {
    setSearchRequestData({ username: innerData.username, page: 0, size: 10 })
  };

  useEffect(() => {
    setUserslist(searchResponseData && searchResponseData.content);
  }, [searchResponseData])

  return (
    <Container
      disableGutters
      sx={{
        padding: '0px 10px 0px 10px',
      }}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
      }}>
        <InnerSearch register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit} />
        <SettingsSVG />
      </Box>
      <SearchList searchedList={userslist} />
    </Container>
  )
}

export default Search