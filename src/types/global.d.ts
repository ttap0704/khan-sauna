interface ProductPreview {
  id: number;
  product: string;
  price: number;
  size: string;
  thumbnail: string;
  images: string[]
}

interface MetaData {
  title: string;
  content: string;
  image: string;
  description: string;
}