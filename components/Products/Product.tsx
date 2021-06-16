import { FC } from 'react';
import Image from 'next/image';

import {
  StyledProductItemWrap,
  StyledProductItem,
  StyledProductBody,
  StyledProductName,
  StyledProductPrice,
  StyledProductOldPrice,
} from './styled';

import { ProductType } from 'interfaces';

const Product: FC<{ product: ProductType }> = ({ product }) => {
  return (
    <StyledProductItemWrap>
      <StyledProductItem>
        <Image src={product.imageLink} alt={product.name} width={188} height={188} />
        <StyledProductBody>
          <StyledProductName>{product.name}</StyledProductName>
          <StyledProductPrice>
            {product.oldPrice && <StyledProductOldPrice>{product.oldPrice}</StyledProductOldPrice>}
            {product.price}
          </StyledProductPrice>
        </StyledProductBody>
      </StyledProductItem>
    </StyledProductItemWrap>
  );
};

export default Product;
