import { Box, styled, Typography } from '@mui/material';
import { ReactNode, use } from 'react';

const LayoutContainer = styled(Box)(({ theme }) => ({}));

const LayoutHeader = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '3.5rem',
  borderBottom: '1px solid',
  borderColor: theme.palette.gray_4.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '.header': {
    width: '100%',
    maxWidth: '60rem',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    },
  },
}));

const LayoutBody = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '60rem',
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  paddingBottom: '1rem',
}));

const LayoutFooter = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '15rem',
  borderTop: '1px solid',
  borderColor: theme.palette.gray_4.main,

  '.info': {
    p: {
      fontSize: '0.9rem',
      display: 'inline-flex',
    },
  },
}));

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const children = props.children;

  const header_list = ['제품보기', '문의하기', '배송 및 설치안내'];
  const business_info = [
    {
      label: '업체명',
      value: '(주)가안',
    },
    {
      label: '주소',
      value: '22649 인천광역시 서구 봉수대로 1595 (금곡동) 2층 힐링사랑건강침대(힐링사랑침대) ',
    },
    {
      label: '대표자',
      value: '홍길동',
    },
    {
      label: '사업자 등록번호',
      value: '123-45-67890',
    },
    {
      label: '고객센터',
      value: '010-0000-0000',
    },
  ];

  return (
    <LayoutContainer>
      <LayoutHeader>
        <Box className='header'>
          <Box className='logo'>LOGO</Box>
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
      <LayoutFooter>
        <Box className='info'>
          {business_info.map((item, item_idx) => {
            return <Typography key={`business_info_${item_idx}`}>{`${item.label} : ${item.value}`}</Typography>;
          })}
        </Box>
        <Box className='copy'></Box>
      </LayoutFooter>
    </LayoutContainer>
  );
}
