import styled from 'styled-components';
import theme from 'theme';

const { products } = theme;

interface WraperProps {
  isLarge: boolean;
}

export const StyledProductsList = styled.ul<WraperProps>`
  display: flex;
  flex-wrap: wrap;
  width: ${(props) => (props.isLarge ? 1200 : 1000)}px;
`;

export const StyledProductItemWrap = styled.li`
  width: 188px;
  padding: 6px;
`;

export const StyledProductItem = styled.div`
  background: ${products.item_bg_color};

  &:hover {
    box-shadow: ${products.item_hover_shadow};
    transform: translateY(-0.0625rem);
  }
`;

export const StyledProductBody = styled.div`
  padding: 10px;
`;

export const StyledProductName = styled.div`
  font-size: 12px;
  line-height: 14px;
  word-wrap: break-word;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const StyledProductPrice = styled.div`
  margin-top: 8px;
  font-size: 16px;
  color: ${products.price_color};
`;

export const StyledProductOldPrice = styled.span`
  color: ${products.old_price_color};
  text-decoration: line-through;
  margin-right: 5px;
`;

export const StyledPagination = styled.div`
  width: 100%;
  text-align: center;
  padding: 16px;

  & button {
    background-color: ${products.item_bg_color};
    border: none;
    padding: 8px 16px;
    margin-left: 8px;
    margin-right: 8px;
    cursor: pointer;
  }
`;
