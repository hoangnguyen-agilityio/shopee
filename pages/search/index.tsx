import { FC } from 'react';
import { GetServerSideProps } from 'next';
import MediaQuery from 'react-responsive';
import fs from 'fs';

import Header from 'components/Header';
import Container from 'components/Container';
import Products from 'components/Products';
import SideBar from 'components/SideBar';

import { CategoryType, initProductList, ProductListType } from 'interfaces';
import { categoriesFilePath } from 'helper';
import API from 'helper/api';
import { validateCategories, validateProducts } from 'helper/validateData';

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
  const fileData = fs.readFileSync(categoriesFilePath());
  const categories: CategoryType[] = JSON.parse(String(fileData));
  let currentCategoryId = '';

  if (category && categories?.length > 0) {
    currentCategoryId = categories.find((item) => item.slug === category)?.id || '';
  }

  const productsRes = await API.getProducts(`?name_like=${keyWord}&categories_like=${currentCategoryId}&_page=1`);
  const products: ProductListType =
    productsRes.errorCode || productsRes.apiError
      ? initProductList
      : { data: productsRes.data, meta: productsRes.meta };

  if (!validateCategories(categories) || !validateProducts(products.data)) {
    return { notFound: true };
  }

  return {
    props: {
      categories,
      currentCategoryId,
      products,
    },
  };
};

export default Search;
