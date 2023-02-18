import { Box, Button, styled, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ProductContainerBox = styled('div')(({ theme }) => ({
  width: 'calc(50% - 0.5rem)',
  position: 'relative',
  '.product-image': {
    width: '100%',
    height: '24.5rem',
    position: 'relatvie',
    overflow: 'hidden',
    backgroundPosition: 'center !important',
    backgroundSize: 'cover !important',

    // img: {
    //   height: '100%',
    //   position: 'aboluste',
    //   top: '50%',
    //   left: '50%',
    //   transfrom: 'translate(-50%, -50%)',
    //   zIndex: 9,
    // },
  },

  '.hover-container': {
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    height: '24.5rem',
    top: '0',
    left: '0',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: '0 0 3rem',

    '.buy-button': {
      width: '10rem',
      height: '3.5rem',
      fontSize: '1.2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.palette.brown.main,
      cursor: 'pointer',
      color: theme.palette.white.main,
    },
  },

  '.product-info': {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',

    '.label': {
      fontSize: '1.1rem',
      margin: '0.25rem 0',
    },
    '.price': {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    '.size': {
      fontSize: '0.8rem',
      color: theme.palette.gray_0.main,
    },
  },
}));

interface ProductContainerProps {
  product: ProductPreview;
}

const ProductContainer = (props: ProductContainerProps) => {
  const router = useRouter();

  const product = props.product;

  const [hover, setHover] = useState(false);

  const moveDetail = () => {
    const is_product = process.env.NODE_ENV === 'production';
    const route_name = is_product ? `/products/${product.id}.html` : `/products/${product.id}`;
    router.push(route_name);
  };

  return (
    <ProductContainerBox>
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <div
          className='product-image'
          style={{ background: `url(/src/assets/images/product/${product.id}/${product.thumbnail})` }}
        >
          <img />
        </div>
        {hover ? (
          <Box className='hover-container' onClick={moveDetail}>
            <Box className='buy-button'>VIEW MORE</Box>
          </Box>
        ) : null}
      </div>

      <Box className='product-info'>
        <Typography className='label'>{product.product}</Typography>
        <Typography className='price'>{Number(product.price).toLocaleString('euc-kr')} 원</Typography>
        <Typography className='size'>규격 : {product.size}</Typography>
      </Box>
    </ProductContainerBox>
  );
};

export default ProductContainer;
