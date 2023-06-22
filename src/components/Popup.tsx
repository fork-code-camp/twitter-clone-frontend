import React, { FC, ReactNode } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Container, useTheme } from '@mui/material';

interface IPopup {
  title: string;
  contentText: string;
  children: ReactNode;
  openPopup: boolean;
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  onPopupSubmit: () => void;
}
const Popup: FC<IPopup> = (props) => {
  const theme = useTheme();
  const {
    title,
    contentText,
    children,
    openPopup,
    setOpenPopup,
    onPopupSubmit,
  } = props;

  return (
    <Container>
      <Dialog
        open={openPopup}
        onClose={() => {
          setOpenPopup(false);
        }}
      >
        <DialogTitle sx={{ background: theme.palette.primary.light }}>
          {title}
        </DialogTitle>
        <DialogContent sx={{ background: theme.palette.primary.light }}>
          <DialogContentText>{contentText}</DialogContentText>

          {children}
        </DialogContent>
        <DialogActions sx={{ background: theme.palette.primary.light }}>
          <Button
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            Cancel
          </Button>
          <Button onClick={onPopupSubmit}>Enter</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Popup;
