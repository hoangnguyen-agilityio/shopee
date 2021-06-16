import { FC } from 'react';
import { GetServerSideProps } from 'next';
import MediaQuery from 'react-responsive';
import fs from 'fs';
import path from 'path';

import Header from 'components/Header';
import Container from 'components/Container';
import Products from 'components/Products';
import SideBar from 'components/SideBar';

import { CategoryType, ProductType, ProductListType } from 'interfaces';
import { parseLinkHeader } from 'helper';

interface Props {
  currentCategoryId: string;
  products: ProductListType;
  categories: CategoryType[];
}

const Search: FC<Props> = ({ currentCategoryId = '', products = { data: [], meta: null }, categories = [] }) => {
  return (
    <main>
      <Header />
      <Container mt={24} display="flex">
        <MediaQuery maxWidth={767}>
          <Products isLarge={false} products={products} />
        </MediaQuery>
        <MediaQuery minWidth={768}>
          <SideBar categories={categories} activeCategory={currentCategoryId} isSearching />
          <Products isLarge={false} products={products} width="calc(100% - 200px)" />
        </MediaQuery>
      </Container>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { keyWord = '', category = '' } = context.query;

  // read categories list from the filesystem
  const filePath = path.join(process.cwd(), 'store', 'catergories.json');
  const fileData = fs.readFileSync(filePath);
  const categories: CategoryType[] = JSON.parse(String(fileData));
  let currentCategoryId = '';

  if (category && categories?.length > 0) {
    currentCategoryId = categories.find((item) => item.slug === category)?.id || '';
  }

  const productsRes = await fetch(
    `${process.env.API_HOST}products?name_like=${keyWord}&categories_like=${currentCategoryId}&_page=1`,
  );
  const meta: ProductListType['meta'] = parseLinkHeader(productsRes.headers.get('Link') || '');
  const products: ProductType[] = await productsRes.json();

  return {
    props: {
      categories,
      currentCategoryId,
      products: { data: products, meta: meta },
    },
  };
};

export default Search;
