import { Container, IconButton, Paper, useTheme } from '@mui/material'
import Image from 'next/image';
import React, { FC } from 'react'

interface IBannerTemplate {
  img?: string | null;
  alt?: string | null;
}

const BannerTemplate: FC<IBannerTemplate> = ({ img, alt }) => {
  const theme = useTheme()
  return (
    <Container disableGutters sx={{ flex: '0 0 auto', width: '100%', height: 'inherit' }} >
      {!img && !alt &&
        <Paper sx={{
          width: '100%',
          height: 'inherit',
          background: `linear-gradient(0deg,
            ${theme.palette.secondary.main} 0%,
            ${theme.palette.primary.main} 100%)`
        }} />
      }
      {img && alt && <IconButton sx={{ width: '100%', height: '200px', p: 0 }}>
        <Image fill sizes='100vw' style={{ objectFit: 'cover' }} src={img && img} alt={alt ? alt : 'defaultBanner'} />
      </IconButton>}
    </Container>
  )
}

export default BannerTemplate

