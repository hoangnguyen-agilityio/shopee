import styled from 'styled-components';
import theme from 'theme';

const { productDetail } = theme;

export const StyledProductWrap = styled.div`
  margin-top: 20px;
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  background-color: ${productDetail.bg_color};
  border-radius: 3px;
  box-shadow: ${productDetail.shadow};
`;

export const StyledProductImage = styled.div`
  position: relative;
  margin-left: 20px;
  width: 450px;
  height: 450px;
  max-width: calc(100vw - 40px);
  max-height: calc(100vw - 40px);
`;

export const StyledProductContent = styled.div`
  flex: 1;
  padding: 0 30px;
`;

export const StyledProductName = styled.h2`
  font-weight: 500;
  line-height: 24px;
  font-size: 20px;
  color: ${productDetail.name_color};
`;

export const StyledProductPriceWrap = styled.div`
  margin-top: 24px;
  padding: 15px 20px;
  background: ${productDetail.price_bg_color};
  font-size: 30px;
  font-weight: 500;
  color: ${productDetail.price_color};
  display: flex;
  align-items: center;
`;

export const StyledProductOldPrice = styled.span`
  font-size: 16px;
  text-decoration: line-through;
  color: ${productDetail.old_price_color};
  margin-right: 10px;
`;

export const StyledProductDescriptions = styled.div`
  margin-top: 25px;
  padding: 0 20px;
`;

export const StyledProductDescription = styled.div`
  margin-bottom: 25px;
  color: ${productDetail.desc_color};
  display: flex;
  align-items: center;
`;

export const StyledProductDescriptionLabel = styled.label`
  color: ${productDetail.desc_label_color};
  width: 110px;
  text-transform: capitalize;
  flex-shrink: 0;
  align-items: center;
`;

export const StyledButtonsWrap = styled.div`
  margin-top: 15px;
`;

export const StyledAddToCardBtn = styled.button`
  background-color: ${productDetail.add_card_btn_bg_color};
  margin-right: 15px;
  margin-bottom: 15px;
  min-width: 140px;
  padding: 12px;
  font-size: 16px;
  color: ${productDetail.add_card_btn_color};
  border: 1px solid ${productDetail.add_card_btn_color};
  box-shadow: ${productDetail.add_card_btn_shadow};
  cursor: pointer;
`;

export const StyledBuyNowBtn = styled.button`
  background-color: ${productDetail.buy_now_btn_bg_color};
  min-width: 140px;
  padding: 13px 12px;
  font-size: 16px;
  color: ${productDetail.buy_now_btn_color};
  box-shadow: ${productDetail.buy_now_btn_shadow};
  border: none;
  cursor: pointer;
`;
