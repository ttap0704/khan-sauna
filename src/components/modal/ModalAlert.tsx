import * as React from 'react';
import { useContext } from 'react';

import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import ModalDefault from './ModalDefault';
import { ModalContext } from '../../provider/ModalProvider';

const ModalAlertBox = styled(Box)(({ theme }) => ({
  fontSize: '0.9rem',
  width: '100%',
  padding: '2rem 0',
  backgroundColor: theme.palette.gray_1.main,
  color: theme.palette.white.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  whiteSpace: 'pre-wrap',
  textAlign: 'center',
  borderRadius: '1rem',
}));

function ModalAlert() {
  const { modal_alert } = useContext(ModalContext);

  const closeModal = () => {
    // modal_alert.closeModalAlert()
  };

  return (
    <>
      <ModalDefault open={modal_alert.data.visible} onClose={closeModal}>
        <ModalAlertBox>
          <Typography>{modal_alert.data.title}</Typography>
        </ModalAlertBox>
      </ModalDefault>
    </>
  );
}

export default ModalAlert;
