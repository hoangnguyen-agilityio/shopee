import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { StyledSlideBarWrap, StyledSlideBarItem, StyledSlideBarList } from './styled';

import { CategoryType } from 'interfaces';
import { CATEGORIES } from 'helper/constTexts';

interface Props {
  activeCategory: string;
  isSearching: boolean;
  categories: CategoryType[];
}

const SideBar: FC<Props> = ({ categories = [], activeCategory = '', isSearching = false }) => {
  const router = useRouter();
  const { keyWord = '' } = router.query;

  return (
    <StyledSlideBarWrap>
      <div>{isSearching ? CATEGORIES.SEARCHING_TITLE : CATEGORIES.TITLE}:</div>
      <StyledSlideBarList>
        {categories.map((category) => (
          <Link
            href={isSearching ? `/search?keyWord=${keyWord}&category=${category.slug}` : `/category/${category.slug}`}
            key={category.id}
          >
            <StyledSlideBarItem className={activeCategory === category.id ? 'active' : ''}>
              {category.name}
            </StyledSlideBarItem>
          </Link>
        ))}
      </StyledSlideBarList>
    </StyledSlideBarWrap>
  );
};

export default SideBar;
