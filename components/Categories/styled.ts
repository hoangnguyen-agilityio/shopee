import styled from 'styled-components';

export const CategoriesWrap = styled.div`
  background-color: white;
  margin-bottom: 24px;
`

export const CategoriesHeader = styled.h2`
  padding: 20px;
  text-transform: uppercase;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.54);
  font-weight: 500;
`

export const StyledCategories = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  color: rgba(0, 0, 0, 0.8);
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 1px solid rgba(0, 0, 0, 0.05);
`;

export const CategoryItem = styled.li`
  flex-basis: 10%;
  text-align: center;
  padding: 10px;
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    transform: translateZ(0);
    z-index: 1;
    border-color: rgba(0, 0, 0, 0.12);
    box-shadow: 0 0 0.8125rem 0 rgb(0 0 0 / 5%);
`;
