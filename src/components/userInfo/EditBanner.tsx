import { Box, IconButton, useTheme } from '@mui/material'
import React, { ChangeEventHandler, MutableRefObject, useRef } from 'react'
import AddPhotoSVG from '@/assets/icons/AddPhoto.svg';
import Banner from '../banner/Banner';

const EditBanner = () => {
  const theme = useTheme()

  const inputRef = useRef<HTMLInputElement | null>(null) as MutableRefObject<HTMLInputElement>

  const handleClick = () => {
    inputRef.current.click()
  };

  const bannerRequest = async (event: React.MouseEvent<HTMLElement>) => {
    await console.log('post запроса нет');
    
    if (event.target) { return }
  }

  return (
    <Box width='100%' height='200px' position='relative'>
    <IconButton
      onClick={() => { handleClick() }}
      sx={{          
        position: 'absolute',
        zIndex: 1,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        background: 'rgba(0, 0, 0, 0.4)',
        borderRadius: '50%',
        ':hover': {
          background: 'rgba(0, 0, 0, 0.2)',
        }
      }}>
      <AddPhotoSVG width='25px' height='25px' fill={theme.palette.primary.light} />
      <input
          type='file'
          id='fileAvatar'
          ref={inputRef}
          style={{ display: 'none' }}
          onChange={bannerRequest as unknown as ChangeEventHandler<HTMLInputElement>} />
    </IconButton>
    <Box sx={{ width: '100%', height: '200px', position: 'absolute' }}>
      <Banner />
    </Box>
    </Box>
  )
}

export default EditBanner