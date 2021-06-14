import { FC, useContext } from 'react';
import Link from 'next/link';

import { StyledSlideBarWrap, StyledSlideBarItem, StyledSlideBarItemActive, StyledSlideBarList } from './styled';
import { AppContext } from 'store/AppContext';

interface Props {
  activeCategory: string;
}

const SideBar: FC<Props> = ({ activeCategory = '' }) => {
  const { categories } = useContext(AppContext);

  return (
    <StyledSlideBarWrap>
      <div>Danh Mục: </div>
      <StyledSlideBarList>
        {categories.map((category) => (
          <Link href={`/category/${category.id}`} key={category.id}>
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
