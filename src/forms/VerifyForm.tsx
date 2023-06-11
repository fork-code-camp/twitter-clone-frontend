import React from 'react';
import VerifyTemplate from './templates/VerifyTemplate';

interface IVerifyTemplate {
  openPopup: boolean;
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setIsVerify: React.Dispatch<React.SetStateAction<boolean>>;
}

const VerifyForm = ({
  openPopup,
  setOpenPopup,
  setIsVerify,
}: IVerifyTemplate) => {
  return (
    <VerifyTemplate
      openPopup={openPopup}
      setOpenPopup={setOpenPopup}
      setIsVerify={setIsVerify}
    />
  );
};

export default VerifyForm;
