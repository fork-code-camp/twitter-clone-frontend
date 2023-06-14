import TaggedText from '@/common/TaggedText'
import { useToFollowMutation } from '@/query/profile/follow.mutation'
import { Button, ListItem } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

const SearchItem = ({ username, profileId }: { username: string, profileId: string }) => {
  const { push } = useRouter();
  const { mutateAsync: mutateToFollow } = useToFollowMutation()

  const onClick = () => {
    mutateToFollow(profileId)
  }

  const onItemClick = () => {
    push(`/user/${username}`)
  }

  return (
    <ListItem
      onClick={onItemClick}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 16px 10px',
        background: '#fbfbfb',
        cursor: 'pointer'
      }}>
      <TaggedText text={username} />
      <Button
        onClick={onClick}
        sx={{
          borderRadius: '100px',
          height: '39px',
          fontFamily: 'button.fontFamily',
          fontStyle: 'button.fontStyle',
          fontWeight: 'button.fontWeight',
          fontSize: 'button.fontSize',
          lineHeight: 'button.lineHeight',
          color: 'primary.light',
          textTransform: 'none',
          border: '1px solid rgb(207, 217, 222)',
          ':hover': {
            backgroundColor: 'primary.contrastText',
          },
        }} variant="contained">Follow</Button>
    </ListItem>
  )
}

export default SearchItem
