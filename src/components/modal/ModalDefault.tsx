import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Box, BoxProps, styled } from '@mui/material';

interface ModalDefaultProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: string;
}

const DrowerModalDefaultWrap = styled(SwipeableDrawer)(({ theme }) => ({
  zIndex: 10000,
  '.MuiPaper-root': {
    margin: '0 auto',
    backgroundColor: 'transparent',
    borderRadius: '1rem',
    width: '25rem',
    height: '100%',
    boxShadow: 'none',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function ModalDefault(props: ModalDefaultProps) {
  const open = props.open;
  const onClose = props.onClose;
  const children = props.children;
  const width = props.width;

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    if (!open) {
      onClose();
    }
  };

  return (
    <DrowerModalDefaultWrap
      anchor='bottom'
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      sx={{
        '.MuiPaper-root': {
          width: width ?? '25rem',
        },
      }}
    >
      {children}
    </DrowerModalDefaultWrap>
  );
}

export default ModalDefault;
