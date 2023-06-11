import { Box, Button, Container, TextField, useTheme } from '@mui/material';
import React, { FC } from 'react';
import InnerActions from './InnerActions';
import Avatar from '@/components/Avatar';
import { useForm } from 'react-hook-form';
import { IMakeTweetResponse } from '@/services/types';

interface IInner {
  avatarImg: string;
  avatarAlt: string;
  onSumbit: (data: IMakeTweetResponse) => void;
}

const Inner: FC<IInner> = ({ avatarImg, avatarAlt, onSumbit }) => {
  const theme = useTheme();

  const { register, handleSubmit, reset } = useForm<IMakeTweetResponse>();

  const customHandleSubmit = (data: IMakeTweetResponse) => {
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
            color: theme.palette.primary.dark,
            fontSize: theme.typography.h2.fontSize,
            lineHeight: theme.typography.h2.lineHeight,
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
              fontWeight: theme.typography.button.fontWeight,
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
