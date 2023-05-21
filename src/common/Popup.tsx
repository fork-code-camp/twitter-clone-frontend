import React, { FC, ReactNode } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Container } from '@mui/material';

interface IPopup {
  title: string;
  contentText: string;
  children: ReactNode;
  openPopup: boolean;
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  onEnterClick: () => void;
}
const Popup: FC<IPopup> = (props) => {
  const {
    title,
    contentText,
    children,
    openPopup,
    setOpenPopup,
    onEnterClick,
  } = props;

  return (
    <Container>
      <Dialog
        open={openPopup}
        onClose={() => {
          setOpenPopup(false);
        }}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{contentText}</DialogContentText>

          {children}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            Cancel
          </Button>
          <Button onClick={onEnterClick}>Enter</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Popup;
