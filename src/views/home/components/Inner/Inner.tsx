import { Box, Button, Container, TextField } from '@mui/material';
import React, { FC } from 'react';
import InnerActions from './InnerActions';
import Avatar from '@/common/Avatar';
import { useForm } from 'react-hook-form';
import { ITweetResponse } from '@/services/types';

interface IInner {
  avatarImg: string;
  avatarAlt: string;
  onSumbit: (data: ITweetResponse) => void;
}

const Inner: FC<IInner> = ({ avatarImg, avatarAlt, onSumbit }) => {
  const lightThemeFontColor = '#0F1419';
  // const darkThemeFontColor = '#e7e9ea';

  const { register, handleSubmit, reset } = useForm<ITweetResponse>();

  const customHandleSubmit = (data: ITweetResponse) => {
    onSumbit(data);
    reset();
  };

  return (
    <Container
      component="form"
      onSubmit={handleSubmit(customHandleSubmit)}
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '0 13px',
        maxWidth: { xs: '320px', md: '600px' },
        padding: '10px 15px',
      }}
    >
      <Avatar img={avatarImg} alt={avatarAlt} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: 1,
        }}
      >
        <TextField
          {...register('text')}
          placeholder="What’s happening?"
          minRows={3}
          multiline
          required={true}
          fullWidth
          sx={{
            minHeight: 18,
            color: lightThemeFontColor,
            fontSize: 20,
            outline: 'none',
            border: 'none',
            resize: 'none',
            fontFamily: 'system-ui',
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: '0 10px',
          }}
        >
          <InnerActions />
          <Button
            type="submit"
            variant="contained"
            sx={{
              borderRadius: '100px',
              width: '77px',
              height: '39px',
              fontWeight: 700,
            }}
          >
            Tweet
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Inner;
