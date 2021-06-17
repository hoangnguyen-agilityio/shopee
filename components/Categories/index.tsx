import { FC } from 'react';

import Category from './Category';
import ScrollXWrap from 'components/ScrollXWrap';
import { CategoriesWrap, CategoriesHeader, StyledCategories } from './styled';

import { CategoryType } from 'interfaces';
import { CATEGORIES } from 'helper/constTexts';

interface Props {
  categories: CategoryType[];
}

const Catergories: FC<Props> = ({ categories = [] }) => {
  if (categories.length === 0) {
    return <div>{CATEGORIES.EMPTY}</div>;
  }

  return (
    <CategoriesWrap>
      <CategoriesHeader>{CATEGORIES.TITLE}</CategoriesHeader>
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
