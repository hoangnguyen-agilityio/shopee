import { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Loading from 'components/Loading';
import {
  StyledProductWrap,
  StyledProductImage,
  StyledProductContent,
  StyledProductName,
  StyledProductPriceWrap,
  StyledProductOldPrice,
  StyledProductDescriptions,
  StyledProductDescription,
  StyledProductDescriptionLabel,
  StyledButtonsWrap,
  StyledAddToCardBtn,
  StyledBuyNowBtn,
} from './styled';

import { ProductType, initProduct } from 'interfaces';
import { priceFormat } from 'helper';
import { PRODUCT_DETAIL } from 'helper/constTexts';

const Product: FC<{ product: ProductType }> = ({ product = initProduct }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <StyledProductWrap>
      <StyledProductImage>
        <Image src={product.imageLink} alt={product.name} layout="fill" objectFit="contain" />
      </StyledProductImage>

      <StyledProductContent>
        <StyledProductName>{product.name}</StyledProductName>
        <StyledProductPriceWrap>
          {product.oldPrice && <StyledProductOldPrice>{priceFormat(product.oldPrice)}</StyledProductOldPrice>}
          {priceFormat(product.price)}
        </StyledProductPriceWrap>
        <StyledProductDescriptions>
          <StyledProductDescription>
            <StyledProductDescriptionLabel>{PRODUCT_DETAIL.SHOCK_DEAL_LABEL}</StyledProductDescriptionLabel>
            {PRODUCT_DETAIL.SHOCK_DEAL_CONTENT}
          </StyledProductDescription>
          <StyledProductDescription>
            <StyledProductDescriptionLabel> {PRODUCT_DETAIL.RETURN_LABEL} </StyledProductDescriptionLabel>
            {PRODUCT_DETAIL.RETURN_CONTENT}
          </StyledProductDescription>
          <StyledProductDescription>
            <StyledProductDescriptionLabel>{PRODUCT_DETAIL.GENUINE_LABEL}</StyledProductDescriptionLabel>
            {PRODUCT_DETAIL.GENUINE_LABEL}
          </StyledProductDescription>
          <StyledProductDescription>
            <StyledProductDescriptionLabel>{PRODUCT_DETAIL.FREE_SHIP_LABEL}</StyledProductDescriptionLabel>
            {PRODUCT_DETAIL.FREE_SHIP_CONTENT}
          </StyledProductDescription>
          <StyledButtonsWrap>
            <StyledAddToCardBtn>{PRODUCT_DETAIL.ADD_TO_CARD}</StyledAddToCardBtn>
            <StyledBuyNowBtn>{PRODUCT_DETAIL.BUY_NOW}</StyledBuyNowBtn>
          </StyledButtonsWrap>
        </StyledProductDescriptions>
      </StyledProductContent>
    </StyledProductWrap>
  );
};

export default Product;
