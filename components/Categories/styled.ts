import styled from 'styled-components';
import theme from 'theme';

const { categories } = theme;

export const CategoriesWrap = styled.div`
  background-color: ${categories.bg_color};
  margin-bottom: 24px;
`;

export const CategoriesHeader = styled.h2`
  padding: 20px;
  text-transform: uppercase;
  font-size: 16px;
  color: ${categories.header_color};
  font-weight: 500;
`;

export const StyledCategories = styled.ul`
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  color: ${categories.color};
  border-top: 1px solid ${categories.border_color};
  border-left: 1px solid ${categories.border_color};
`;

export const CategoryItem = styled.li`
  flex-basis: 10%;
  text-align: center;
  padding: 10px;
  border-right: 1px solid ${categories.border_color};
  border-bottom: 1px solid ${categories.border_color};
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    transform: translateZ(0);
    z-index: 1;
    border-color: ${categories.border_hover_color};
    box-shadow: ${categories.border_hover_shadow};
`;
