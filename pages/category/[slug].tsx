import { GetStaticProps, GetStaticPaths } from 'next';
import { FC } from 'react';
import MediaQuery from 'react-responsive';
import fs from 'fs';

import Header from 'components/Header';
import Container from 'components/Container';
import Products from 'components/Products';
import SideBar from 'components/SideBar';

import { ProductListType, CategoryType, initProductList } from 'interfaces';
import { categoriesFilePath } from 'helper';
import API from 'helper/api';

interface Props {
  currentCategoryId: string;
  products: ProductListType;
  categories: CategoryType[];
}

const ListProductsByCategory: FC<Props> = ({ currentCategoryId = '', products = initProductList, categories = [] }) => {
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
  const categoriesRes = await API.getCategories();
  const categories: CategoryType[] = categoriesRes.errorCode || categoriesRes.apiError ? [] : categoriesRes;

  if (categories.length > 0) {
    fs.writeFileSync(categoriesFilePath(), JSON.stringify(categories));
  }

  const paths = categories.map((category) => ({
    params: { slug: String(category.slug) },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params = { slug: '' } }) => {
  // read categories list from the filesystem
  const fileData = fs.readFileSync(categoriesFilePath());
  const categories: CategoryType[] = JSON.parse(String(fileData));
  let currentCategoryId = '';

  if (categories?.length > 0) {
    currentCategoryId = categories.find((item) => item.slug === params.slug)?.id || '';
  }

  const productsRes = await API.getProducts(`?categories_like=${currentCategoryId}&_page=1`);
  const products: ProductListType =
    productsRes.errorCode || productsRes.apiError
      ? initProductList
      : { data: productsRes.data, meta: productsRes.meta };

  return {
    props: {
      products,
      categories,
      currentCategoryId,
    },
    revalidate: 3,
  };
};

export default ListProductsByCategory;
