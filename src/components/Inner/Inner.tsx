import {
  Box,
  Button,
  Container,
  Input,
  TextField,
  useTheme,
} from '@mui/material';
import React, { FC } from 'react';
import InnerActions from './InnerActions';
import Avatar from '@/components/Avatar';
import { useForm } from 'react-hook-form';
import { IMakeTweetRequest } from '@/services/types';
import { useMakeTweetMutation } from '@/services/Query/tweet/tweet.mutation';

interface IInner {
  avatarUrl: string;
  avatarAlt: string;
}
const Inner: FC<IInner> = ({ avatarUrl, avatarAlt }) => {
  const theme = useTheme();
  const { register, handleSubmit, reset } = useForm<IMakeTweetRequest>();
  const { mutateAsync: mutateMakeTweet } = useMakeTweetMutation();
  const onSubmit = async (requestData: IMakeTweetRequest) => {
    await mutateMakeTweet(requestData);

    const formdata = new FormData();
    const blob = new Blob([JSON.stringify({ text: requestData.text })], {
      type: 'application/json',
    });

    formdata.append('request', blob);
    formdata.append('files', requestData.file[0]);

    reset();
  };

  return (
    <Container
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '0 13px',
        padding: '10px 15px',
      }}
    >
      <Avatar img={avatarUrl} alt={avatarAlt} />
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
          type="text"
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
        <Input type="file" {...register('file')} />

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
              fontFamily: theme.typography.button.fontFamily,
              fontStyle: theme.typography.button.fontStyle,
              fontWeight: theme.typography.button.fontWeight,
              fontSize: theme.typography.button.fontSize,
              lineHeight: theme.typography.button.lineHeight,
              color: theme.typography.button.color,
              ':hover': {
                background: theme.palette.primary.contrastText,
              },
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
