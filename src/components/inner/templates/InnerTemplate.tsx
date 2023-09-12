import React, { FC, ChangeEventHandler, MutableRefObject, useRef, useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Input,
  Button,
  useTheme,
  IconButton,
} from '@mui/material';
import CustomAvatar from '../../avatar/CustomAvatar';
import InnerWidgetsTemplate from './InnerWidgetsTemplate';
import { IAddTweetRequest } from '@/services/types';
import { UseFormHandleSubmit, UseFormRegister, Controller, Control } from 'react-hook-form';
import MediaSVG from '@/assets/icons/Media.svg';

interface IInnerTemplate {
  avatarUrl?: string;
  avatarAlt?: string;
  control: Control;
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
  const inputRef = useRef<HTMLInputElement | null>(null) as MutableRefObject<HTMLInputElement>

  const avatarRequest = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) { return }
    if (files && files.length > 0) {
      const requestFile = await files[0];
      console.log(requestFile);

      register('file')
      // await mutateEditAvatar(requestFile)
    }
  }

  const handleClick = () => {
    inputRef.current.click()
  };



  const [selectedFile, setSelectedFile] = useState(null);
  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];

  //   // Выполните здесь нужные действия с выбранным файлом

  //   setSelectedFile(file);
  // };

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












          {/* <Input type="file" {...register('file')} /> */}


          <Controller
            name="file"
            control={control}
            render={({ field: { value, onChange, ...field } }) => (
              <>

              <input style={{ display: 'none' }} type="file" id="upload" {...field} onChange={(event) => {
                    onChange(event.target.files[0]);
                  }} />
          <label htmlFor="upload">
            {/* Здесь вы можете использовать свою иконку */}
            <MediaSVG style={{ fill: iconColor }} />
            {/* {selectedFile ? selectedFile.name : "Выберите файл"} */}
          </label>


              </>
            )}
          />









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
