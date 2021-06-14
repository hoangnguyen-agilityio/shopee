import { FC } from 'react';

import Category from './Category';
import { CategoriesWrap, CategoriesHeader, StyledCategories } from './styled';

import { CategoryType } from 'interfaces';

interface Props {
  categories: CategoryType[];
}

const Catergories: FC<Props> = ({ categories = [] }) => {
  if (categories.length === 0) {
    return <div> Không có danh mục nào </div>;
  }

  return (
    <CategoriesWrap>
      <CategoriesHeader>Danh mục</CategoriesHeader>
      <StyledCategories>
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </StyledCategories>
    </CategoriesWrap>
  );
};

export default Catergories;
