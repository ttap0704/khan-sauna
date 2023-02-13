import { Box, styled } from '@mui/material';
import { ReactNode } from 'react';

const LayoutContainer = styled(Box)(({ theme }) => ({}));

const LayoutHeader = styled(Box)(({ theme }) => ({}));

const LayoutBody = styled(Box)(({ theme }) => ({}));

const LayoutFooter = styled(Box)(({ theme }) => ({}));

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const children = props.children;

  const header_list = ['제품보기', '문의하기', '배송 및 설치안내'];
  return (
    <LayoutContainer>
      <LayoutHeader>
        <Box className='header'>
          <Box>LOGO</Box>
          <Box>
            {header_list.map((item, item_idx) => {
              return <Box>{item}</Box>;
            })}
          </Box>
        </Box>
      </LayoutHeader>
      <LayoutBody>{children}</LayoutBody>
      <LayoutFooter>footer</LayoutFooter>
    </LayoutContainer>
  );
};

export default Layout;
