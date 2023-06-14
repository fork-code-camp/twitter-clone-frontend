import React, { FC, ReactNode } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Container, SxProps, Theme, useTheme } from '@mui/material';

interface IPopupReply {
  title: string;
  contentText?: string;
  children: ReactNode;
  openPopup: boolean;
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  sx?: SxProps<Theme>;
}
const PopupReply: FC<IPopupReply> = (props) => {
  const theme = useTheme();
  const {
    title,
    contentText,
    sx,
    children,
    openPopup,
    setOpenPopup,
  } = props;

  return (
    <Container sx={{ position: 'absolute' }}>
      <Dialog
        open={openPopup}
        onClose={() => {
          setOpenPopup(false);
        }}
      >
        <DialogTitle
          sx={[
            { background: theme.palette.primary.light },
            ...(Array.isArray(sx) ? sx : [sx]),
          ]}
        >
          {title}
        </DialogTitle>
        <DialogContent sx={{ background: theme.palette.primary.light }}>
          {contentText && <DialogContentText>{contentText}</DialogContentText>}
          {children}
        </DialogContent>

      </Dialog>
    </Container>
  );
};

export default PopupReply;
