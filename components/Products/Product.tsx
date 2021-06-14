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
        <div>
          <Image src={product.src} alt={product.name} width={188} height={188} />
        </div>
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
