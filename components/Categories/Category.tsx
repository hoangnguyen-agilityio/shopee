import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { CategoryItem } from './styled';

import { CategoryType } from 'interfaces';

interface Props {
  category: CategoryType;
}

const Catergory: FC<Props> = ({ category }) => (
  <Link href={`/category/${category.id}`}>
    <CategoryItem>
      <Image src={category.src} alt={category.name} width={80} height={80} />
      <h3>{category.name}</h3>
    </CategoryItem>
  </Link>
);

export default Catergory;
