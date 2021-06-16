import { GetStaticProps, GetStaticPaths } from 'next';
import { FC } from 'react';
import MediaQuery from 'react-responsive';
import fs from 'fs';
import path from 'path';

import Header from 'components/Header';
import Container from 'components/Container';
import Products from 'components/Products';
import SideBar from 'components/SideBar';

import { ProductType, ProductListType, CategoryType } from 'interfaces';
import { parseLinkHeader } from 'helper';

interface Props {
  currentCategoryId: string;
  products: ProductListType;
  categories: CategoryType[];
}

const ListProductsByCategory: FC<Props> = ({
  currentCategoryId = '',
  products = { data: [], meta: null },
  categories = [],
}) => {
  return (
    <main>
      <Header />
      <Container mt={24} display="flex">
        <MediaQuery maxWidth={767}>
          <Products isLarge={false} products={products} />
        </MediaQuery>
        <MediaQuery minWidth={768}>
          <SideBar categories={categories} activeCategory={currentCategoryId} isSearching={false} />
          <Products isLarge={false} products={products} width="calc(100% - 200px)" />
        </MediaQuery>
      </Container>
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // fecth categories list
  const filePath = path.join(process.cwd(), 'store', 'catergories.json');
  const fileData = fs.readFileSync(filePath);
  const categories: CategoryType[] = JSON.parse(String(fileData));

  const paths = categories.map((category) => ({
    params: { slug: String(category.slug) },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params = { slug: '' } }) => {
  // read categories list from the filesystem
  const filePath = path.join(process.cwd(), 'store', 'catergories.json');
  const fileData = fs.readFileSync(filePath);
  const categories: CategoryType[] = JSON.parse(String(fileData));
  let currentCategoryId = '';

  if (categories?.length > 0) {
    currentCategoryId = categories.find((item) => item.slug === params.slug)?.id || '';
  }

  const productsRes = await fetch(`${process.env.API_HOST}products/?categories_like=${currentCategoryId}&_page=1`);
  const meta: ProductListType['meta'] = parseLinkHeader(productsRes.headers.get('Link') || '');
  const products: ProductType[] = await productsRes.json();

  return {
    props: {
      products: { data: products, meta },
      categories,
      currentCategoryId,
    },
    revalidate: 3,
  };
};

export default ListProductsByCategory;
