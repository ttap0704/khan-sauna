import { ModalContext } from '@/src/provider/ModalProvider';
import { fetchGetApi, fetchPostApi } from '@/src/utils/api';
import validation from '@/src/utils/validation';
import { Box, Button, styled, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { ReactNode, use, useContext, useState } from 'react';
import InputOutliened from '../input/InputOutliened';

const LayoutContainer = styled(Box)(({ theme }) => ({
  overflowX: 'hidden',
  width: '100%',
}));

const LayoutHeader = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '4.5rem',
  borderBottom: '1px solid',
  borderColor: theme.palette.gray_4.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.brown.main,

  '.header': {
    width: 'calc(100% - 2rem)',
    maxWidth: '55rem',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '.logo': {
      cursor: 'pointer',
    },
  },

  ul: {
    display: 'flex',
    height: '100%',
    li: {
      padding: '0 1rem',
      cursor: 'pointer',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.white.main,
      fontSize: '1.1rem',
    },
  },
}));

const LayoutBody = styled(Box)(({ theme }) => ({
  width: 'calc(100% - 2rem)',
  maxWidth: '55rem',
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  paddingBottom: '1rem',
}));

const LayoutEmail = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.gray_6.main,
  '& > div': {
    width: 'calc(100% - 2rem)',
    maxWidth: '55rem',
    margin: '0 auto',
    padding: '1rem 0',

    '& > div': {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    },
    '.user-info': {
      display: 'flex',
      gap: '1rem',
      '& > div': {
        display: 'flex',
        width: '50%',
      },
    },

    '.input-box': {
      height: '3rem',
      display: 'flex',
    },

    '.MuiInputBase-root': {
      width: 'calc(100% - 5rem)',
      backgroundColor: theme.palette.white.main,
    },

    '.email-contents': {
      '.MuiInputBase-root': {
        width: 'calc(100% - 13rem)',
        backgroundColor: theme.palette.white.main,
      },

      button: {
        marginLeft: '1rem',
        width: '7rem',
      },
    },

    '.title': {
      fontSize: '1rem',
      display: 'flex',
      width: '5rem',
      height: '100%',
      alignItems: 'center',
      fontWeight: '600',
    },
  },
}));

const LayoutFooter = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.black.main,
  '& > .info-box': {
    width: 'calc(100% - 2rem)',
    maxWidth: '55rem',
    margin: '0 auto',
    '.info': {
      padding: '1rem 0 0.5rem',

      '.title': {
        fontWeight: 600,
        color: theme.palette.white.main,
        fontSize: '1.1rem',
        marginBottom: '1rem',
        display: 'block',
      },
      '.detail': {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem',
        p: {
          fontSize: '0.9rem',
          display: 'inline-flex',
          color: theme.palette.white.main,
        },
      },
    },
  },
}));

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { modal_confirm, modal_alert } = useContext(ModalContext);
  const router = useRouter();
  const children = props.children;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [emailContents, setEmailContents] = useState('');

  const header_list = ['????????????', '?????? ??? ????????????'];
  const business_info = [
    {
      label: '?????????',
      value: '(???)??????',
    },
    {
      label: '??????',
      value: '22649 ??????????????? ?????? ???????????? 1595 (?????????) 2??? ????????????????????????(??????????????????)???',
    },
    {
      label: '?????????',
      value: '?????????',
    },
    {
      label: '????????? ????????????',
      value: '123-45-67890',
    },
    {
      label: '????????????',
      value: '010-0000-0000',
    },
  ];

  const moveMain = () => {
    router.push('/');
  };

  const confirmEmail = () => {
    if (name.length == 0 || phone.length == 0 || emailContents.length == 0) {
      modal_alert.openModalAlert('?????? ????????? ??????????????????.');
      return;
    }

    if (!validation.phone_no_hypen(phone)) {
      modal_alert.openModalAlert('????????? ??????????????? ??????????????????.');
      return;
    }

    modal_confirm.openModalConfirm('????????? ?????????????????????????', sendEmail);
  };
  const sendEmail = async () => {
    const email_res = await fetchPostApi('https://lwhvubbiya.execute-api.ap-northeast-2.amazonaws.com/sendemail', {
      subject: `[(???)??????] ????????????(${name})`,
      message: `??????: ${name}<br/>????????????: ${phone}<br/>??????: ${emailContents}`,
    });
    if (email_res.pass) {
      setName('');
      setPhone('');
      setEmailContents('');
      modal_alert.openModalAlert('????????? ?????????????????????.\r\n???????????? ??????????????? ????????????????????????.');
    }
  };

  return (
    <LayoutContainer>
      <LayoutHeader>
        <Box className='header'>
          <Box className='logo' onClick={moveMain}>
            LOGO
          </Box>
          <Box className='menu' component='ul'>
            {header_list.map((item, item_idx) => {
              return (
                <Box component='li' key={`header_item_${item_idx}`}>
                  {item}
                </Box>
              );
            })}
          </Box>
        </Box>
      </LayoutHeader>
      <LayoutBody>{children}</LayoutBody>
      {/* <LayoutEmail>
        <Box>
          <Box>
            <Box className='user-info'>
              <Box className='input-box'>
                <Typography component='span' className='title'>
                  ??????
                </Typography>
                <InputOutliened
                  value={name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setName(e.target.value);
                  }}
                />
              </Box>
              <Box className='input-box'>
                <Typography component='span' className='title'>
                  ????????????
                </Typography>
                <InputOutliened
                  value={phone}
                  format='number'
                  max={11}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPhone(e.target.value);
                  }}
                />
              </Box>
            </Box>
            <Box className='email-contents input-box'>
              <Typography component='span' className='title'>
                ????????????
              </Typography>
              <InputOutliened
                value={emailContents}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setEmailContents(e.target.value);
                }}
              />

              <Button variant='contained' color='brown' onClick={confirmEmail}>
                ????????????
              </Button>
            </Box>
          </Box>
        </Box>
      </LayoutEmail> */}
      <LayoutFooter>
        <Box className='info-box'>
          <Box className='info'>
            <Typography className='title' component='b'>
              ????????? ??????
            </Typography>
            <Box className='detail'>
              {business_info.map((item, item_idx) => {
                return <Typography key={`business_info_${item_idx}`}>{`${item.label} : ${item.value}`}</Typography>;
              })}
            </Box>
          </Box>
          <Box className='copy'></Box>
        </Box>
      </LayoutFooter>
    </LayoutContainer>
  );
}
