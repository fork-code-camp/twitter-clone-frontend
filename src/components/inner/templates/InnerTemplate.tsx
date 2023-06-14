import React, { FC } from 'react';
import {
  Container,
  Box,
  TextField,
  Input,
  Button,
  useTheme,
} from '@mui/material';
import CustomAvatar from '../../avatar/CustomAvatar';
import InnerWidgetsTemplate from './InnerWidgetsTemplate';
import { IAddTweetRequest } from '@/services/types';
import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

interface IInnerTemplate {
  avatarUrl?: string;
  avatarAlt?: string;
  register: UseFormRegister<IAddTweetRequest>;
  handleSubmit: UseFormHandleSubmit<IAddTweetRequest>;
  onSubmit: (requestData: IAddTweetRequest) => void;
}

const InnerTemplate: FC<IInnerTemplate> = ({
  avatarUrl,
  avatarAlt,
  register,
  handleSubmit,
  onSubmit,
}) => {
  const theme = useTheme();
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
      {avatarUrl && <CustomAvatar img={avatarUrl} alt={avatarAlt} />}
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
          color="primary"
          sx={{
            minHeight: 18,
            fontSize: 20,
            lineHeight: 22,
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
          <InnerWidgetsTemplate />
          <Input type="file" {...register('file')} />
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

export default InnerTemplate;
