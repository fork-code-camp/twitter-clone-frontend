import React, { FC, useState } from 'react'
import Avatar from '@/components/avatar/Avatar'
import { Box, Button, Typography } from '@mui/material'
import { Container, useTheme } from '@mui/system'
import TaggedText from '@/common/TaggedText'
import UserLocation from '@/common/UserLocation'
import JoinedDate from '@/common/JoinedDate'
import EditUserInfo from '@/components/userInfo/EditUserInfo'
import Banner from '@/components/banner/Banner'

interface IUserInfoTemplate {
  avatarUrl?: string
  username: string | 'null'
  tag: string | 'null'
  bio?: string
  userLocation?: string
  joinedDate?: string
}

const UserInfoTemplate: FC<IUserInfoTemplate> = ({
  avatarUrl,
  username,
  tag,
  bio,
  userLocation,
  joinedDate,
}) => {
  const theme = useTheme()
  const [openEditProfile, setOpenEditProfile] = useState(false)

  return (
    <Container disableGutters sx={{ position: 'relative', marginBottom: '10px' }}>
      <Box sx={{ width: '100%', height: '200px', position: 'absolute' }}>
        <Banner />
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="end"
        position="relative"
        gap={1}
        mx={2}
        paddingTop='120px'
      >
        <Box>
          <Avatar width={150} height={150} img={avatarUrl} alt={avatarUrl} />
          <Typography variant="h2">{username}</Typography>
          {tag && (<TaggedText color="tag.contrastText" tagSymb="@" text={tag} />)}
          {bio && (<Typography variant="h4" my={1}> {bio} </Typography>)}
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
            {userLocation && <UserLocation userLocation={userLocation} />}
            {joinedDate && <JoinedDate joinedDate={joinedDate} />}
          </Box>
        </Box>
        <Button
          variant="outlined"
          onClick={() => {
            setOpenEditProfile(true)
          }}
          sx={{
            borderRadius: '100px',
            height: '39px',
            fontFamily: 'button.fontFamily',
            fontStyle: 'button.fontStyle',
            fontWeight: 'button.fontWeight',
            fontSize: 'button.fontSize',
            lineHeight: 'button.lineHeight',
            color: 'primary.dark',
            textTransform: 'none',
            ':hover': {
              background: theme.palette.custom.dark_7,
            },
          }}
        >
          Edit profile
        </Button>
      </Box>
      {openEditProfile && (
        <EditUserInfo
          openEditProfile={openEditProfile}
          setOpenEditProfile={setOpenEditProfile}
        />
      )}
    </Container>
  )
}

export default UserInfoTemplate
