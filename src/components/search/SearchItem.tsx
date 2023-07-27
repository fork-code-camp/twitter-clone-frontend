import TaggedText from '@/common/TaggedText'
import { ListItem } from '@mui/material'
import React from 'react'

const SearchItem = ({ username }: { username: string }) => {
  return (
    <ListItem sx={{ padding: '10px 16px 10px', background: '#fbfbfb' }}>
      <TaggedText text={username} />
    </ListItem>
  )
}

export default SearchItem
