import { Box, Button, styled, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const ProductContainerBox = styled('div')(({ theme }) => ({
  width: 'calc(50% - 0.5rem)',
  position: 'relative',
  '.product-image': {
    width: '100%',
    height: '30rem',
    position: 'relatvie',
    overflow: 'hidden',

    img: {
      height: '100%',
      position: 'aboluste',
      top: '50%',
      left: '50%',
      transfrom: 'translate(-50%, -50%)',
      zIndex: 9,
    },
  },

  '.hover-container': {
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    height: '30rem',
    top: '0',
    left: '0',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: '0 0 3rem',

    button: {
      fontSize: '1.1rem',
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
  const product = props.product;

  const [hover, setHover] = useState(false);

  return (
    <ProductContainerBox>
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <div className='product-image'>
          <img src={`/src/assets/images/product/${product.id}/${product.thumbnail}`} />
        </div>
        {hover ? (
          <Box className='hover-container'>
            <Button variant='contained' disableRipple disableTouchRipple disableFocusRipple disableElevation>
              BUY
            </Button>
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
