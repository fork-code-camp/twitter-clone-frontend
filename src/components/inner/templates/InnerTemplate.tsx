import React, { FC, useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Input,
  Button,
  useTheme,
  Typography,
} from '@mui/material';
import CustomAvatar from '../../avatar/CustomAvatar';
import InnerWidgetsTemplate from './InnerWidgetsTemplate';
import { IAddTweetRequest } from '@/services/types';
import { UseFormHandleSubmit, UseFormRegister, Controller, Control } from 'react-hook-form';
import MediaSVG from '@/assets/icons/Media.svg';

interface IInnerTemplate {
  avatarUrl?: string;
  avatarAlt?: string;
  control: Control<IAddTweetRequest>;
  register: UseFormRegister<IAddTweetRequest>;
  handleSubmit: UseFormHandleSubmit<IAddTweetRequest>;
  onSubmit: (requestData: IAddTweetRequest) => void;
}

const InnerTemplate: FC<IInnerTemplate> = ({
  avatarUrl,
  avatarAlt,
  control,
  register,
  handleSubmit,
  onSubmit,
}) => {
  const theme = useTheme();
  const iconColor = theme.palette.buttonWidget?.contrastText || '#000000';

  const [selectedFile, setSelectedFile] = useState<File | null>(null)

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
            alignItems: 'center',
            gap: '0 10px',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '5px', }}>
            <Controller
              name="file"
              control={control}
              render={({ field: { value, onChange, ...field } }) => (
                <>
                  <Input style={{ display: 'none' }} type="file" id="upload" {...field} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const files = event.target.files;
                    if (files && files.length > 0) {
                      console.log('file added');
                      setSelectedFile(files[0]);
                      onChange(files[0]);
                    }
                  }} />
                  <label htmlFor="upload" style={{ display: 'flex', gap: '5px', cursor: 'pointer', height: '20px', padding: '0px 0 0px 0' }}>
                    <MediaSVG style={{ fill: iconColor }} />
                    {selectedFile && <Typography>+1</Typography>}
                  </label>
                </>
              )}
            />
            <InnerWidgetsTemplate />

          </Box>
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
