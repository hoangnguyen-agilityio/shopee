import { FC } from 'react';

import Category from './Category';
import ScrollXWrap from 'components/ScrollXWrap';
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
      <ScrollXWrap>
        <StyledCategories>
          {categories.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </StyledCategories>
      </ScrollXWrap>
    </CategoriesWrap>
  );
};

export default Catergories;
