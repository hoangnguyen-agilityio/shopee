import { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import {
  StyledProductItemWrap,
  StyledProductItem,
  StyledProductBody,
  StyledProductName,
  StyledProductPrice,
  StyledProductOldPrice,
} from './styled';

import { ProductType, initProduct } from 'interfaces';
import { priceFormat } from 'helper';

const Product: FC<{ product: ProductType }> = ({ product = initProduct }) => {
  const router = useRouter();

  return (
    <StyledProductItemWrap>
      <StyledProductItem onClick={() => router.push(`/product/${product.slug}`)}>
        <Image src={product.imageLink} alt={product.name} width={188} height={188} />
        <StyledProductBody>
          <StyledProductName>{product.name}</StyledProductName>
          <StyledProductPrice>
            {product.oldPrice && <StyledProductOldPrice>{priceFormat(product.oldPrice)}</StyledProductOldPrice>}
            {priceFormat(product.price)}
          </StyledProductPrice>
        </StyledProductBody>
      </StyledProductItem>
    </StyledProductItemWrap>
  );
};

export default Product;
