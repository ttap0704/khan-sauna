import { Box, styled } from '@mui/material';
import products from '@/src/assets/json/product.json';
import ProductContainer from '@/src/components/common/ProductContainer';

const MainSlider = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '30vh',
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
  paddingTop: '1rem',
}));

export default function Home() {
  const product_list: ProductPreview[] = [...products];

  return (
    <>
      <MainSlider>
        <Box className='image-box'>여기는 이미지 들어갈곳</Box>
      </MainSlider>
      <ProductBox>
        {product_list.map((item, item_idx) => {
          return <ProductContainer key={`product_${item_idx}`} product={item}></ProductContainer>;
        })}
      </ProductBox>
    </>
  );
}
