import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { StyledSlideBarWrap, StyledSlideBarItem, StyledSlideBarItemActive, StyledSlideBarList } from './styled';
import { CategoryType } from 'interfaces';

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
      <div>{isSearching ? 'Lọc kết quả tìm kiếm theo: ' : 'Danh Mục:'}</div>
      <StyledSlideBarList>
        {categories.map((category) => (
          <Link
            href={isSearching ? `/search?keyWord=${keyWord}&category=${category.slug}` : `/category/${category.slug}`}
            key={category.id}
          >
            {activeCategory === category.id ? (
              <StyledSlideBarItemActive>{category.name}</StyledSlideBarItemActive>
            ) : (
              <StyledSlideBarItem>{category.name}</StyledSlideBarItem>
            )}
          </Link>
        ))}
      </StyledSlideBarList>
    </StyledSlideBarWrap>
  );
};

export default SideBar;
