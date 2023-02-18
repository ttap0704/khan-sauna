import { Box, styled, Typography } from '@mui/material';
import products from '@/src/assets/json/product.json';
import ProductContainer from '@/src/components/common/ProductContainer';

const MainSlider = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '40vh',
  position: 'relative',
  '.image-box': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
}));

const ProductBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
}));

const MainDivider = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '1px',
  backgroundColor: theme.palette.gray_4.main,
  margin: '1rem 0 4rem',
}));

const TitleBox = styled(Box)(({ theme }) => ({
  marginTop: '4rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  p: {
    fontSize: '2.25rem',
    lineHeight: 1,
  },
}));

export default function Home() {
  const product_list: ProductPreview[] = [...products];

  return (
    <>
      <MainSlider>
        <Box className='image-box'>여기는 이미지 들어갈곳</Box>
      </MainSlider>
      <TitleBox>
        <Typography>PRODUCT</Typography>
      </TitleBox>
      <MainDivider />
      <ProductBox>
        {product_list.map((item, item_idx) => {
          return <ProductContainer key={`product_${item_idx}`} product={item}></ProductContainer>;
        })}
      </ProductBox>
    </>
  );
}
