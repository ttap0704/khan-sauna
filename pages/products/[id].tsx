import products from '@/src/assets/json/product.json';
import { Box, styled, Typography } from '@mui/material';
import { GetStaticProps, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useEffect, useState } from 'react';

const ProductDetailInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '1rem',
  paddingTop: '1rem',

  '.image-box': {
    width: '30rem',
    height: '30rem',
    position: 'relative',
    overflow: 'hidden',
    backgroundPosition: 'center !important',
    backgroundSize: 'cover !important',
    // img: {
    //   position: 'absolute',
    //   top: '50%',
    //   left: '50%',
    //   transform: 'translate(-50%, -50%)',
    //   width: '30rem',
    // },
  },

  '.detail-box': {
    width: 'calc(100% - 31rem)',

    '.title': {
      fontSize: '2rem',
    },
    '.price': {
      fontSize: '1.5rem',
      textAlign: 'right',
    },
    '.buttons': {
      display: 'flex',
      gap: '0.5rem',
      '& > div': {
        width: 'calc(50% - 0.25rem)',
        height: '3.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.3rem',
        color: theme.palette.white.main,
        cursor: 'pointer',

        '&:first-of-type': {
          backgroundColor: theme.palette.brown.main,
        },
        '&:last-of-type': {
          backgroundColor: theme.palette.black.main,
        },
      },
    },

    '.additional-info': {
      fontSize: '1rem',
      b: {
        fontWeight: '600',
      },
      '&:not(:last-of-type)': {
        marginBottom: '0.5rem',
      },
    },
  },

  [theme.breakpoints.down('smd')]: {
    flexDirection: 'column',
    alignItems: 'center',
    '.detail-box': {
      width: '30rem',
    },
  },
}));

const ProductDetailIntro = styled(Box)(({ theme }) => ({
  width: '100%',
  img: {
    width: '100%',
  },
}));

const ProductDetailDivider = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '1px',
  backgroundColor: theme.palette.gray_4.main,
  margin: '1rem 0',
}));

const ProductDetail = (props: { product_id: string }) => {
  const product_id = props.product_id;
  const [product, setProduct] = useState<ProductPreview | null>(null);

  useEffect(() => {
    const tmp_product = products.find(item => item.id == Number(product_id));
    if (tmp_product) {
      setProduct({ ...tmp_product });
    }
  }, []);

  return product ? (
    <>
      <ProductDetailInfo>
        <Box
          className='image-box'
          sx={{ background: `url(/src/assets/images/product/${product.id}/${product.thumbnail})` }}
        ></Box>
        <Box className='detail-box'>
          <Typography className='title'>{product.product}</Typography>
          <Typography className='price'>{Number(product.price).toLocaleString('euc-kr')}원</Typography>
          <ProductDetailDivider />
          <Box className='additional-info'>
            제조사 : <Typography component='b'>(주)가안</Typography>
          </Box>
          <Box className='additional-info'>
            배송정보 : <Typography component='b'>직접배송 | 설치상품</Typography>
          </Box>
          <ProductDetailDivider />
          <Box className='buttons'>
            <Box>구매 문의하기</Box>
            <Box>배송 및 설치안내</Box>
          </Box>
        </Box>
      </ProductDetailInfo>
      <ProductDetailDivider />
      <ProductDetailIntro>
        <Box component='img' src='/src/assets/images/product_common/001.png' />
        <Box component='img' src='/src/assets/images/product_common/002.png' />
        <Box component='img' src='/src/assets/images/product_common/003.png' />
        <Box component='img' src='/src/assets/images/product_common/004.png' />
        <Box component='img' src='/src/assets/images/product_common/005.png' />
        <Box component='img' src='/src/assets/images/product_common/006.png' />
        <Box component='img' src='/src/assets/images/product_common/007.png' />
        <Box component='img' src='/src/assets/images/product_common/008.png' />
        <Box component='img' src='/src/assets/images/product_common/009.png' />
        <Box component='img' src='/src/assets/images/product_common/010.png' />
        <Box component='img' src='/src/assets/images/product_common/011.png' />
        <Box component='img' src='/src/assets/images/product_common/012.png' />
        <Box component='img' src='/src/assets/images/product_common/013.png' />
      </ProductDetailIntro>
    </>
  ) : null;
};

export default ProductDetail;

export async function getStaticPaths() {
  return {
    paths: products.map(item => {
      return {
        params: {
          id: `${item.id}`,
        },
      };
    }),
    fallback: false,
  };
}

export const getStaticProps = async ({ params }: any) => {
  const id = params?.id;

  const current_product = products.find(item => item.id == Number(id));
  if (current_product) {
    const meta_props: MetaData = {
      title: `${current_product.product} | (주)가안`,
      content: `https://kaansauna.com/products/${id}`,
      image: `https://kaansauna.com/src/assets/images/product/${id}/${current_product.thumbnail})`,
      description: current_product.description,
    };

    return {
      props: {
        product_id: id,
        meta_props,
      },
    };
  } else {
    return {
      props: {
        product_id: id,
      },
    };
  }
};
