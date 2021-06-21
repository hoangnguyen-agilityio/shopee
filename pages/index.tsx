import { FC } from 'react';
import { GetStaticProps } from 'next';
import fs from 'fs';

import Header from 'components/Header';
import Container from 'components/Container';
import SectionHeader from 'components/SectionHeader';
import Categories from 'components/Categories';
import Products from 'components/Products';

import { CategoryType, ProductListType, initProductList } from 'interfaces';
import { categoriesFilePath } from 'helper';
import API from 'helper/api';
import { PRODUCTS } from 'helper/constTexts';
import { validateCategories, validateProducts } from 'helper/validateData';

interface Props {
  categories: CategoryType[];
  products: ProductListType;
}

const Home: FC<Props> = ({ categories, products }) => (
  <main>
    <Header />
    <Container mt={24}>
      <Categories categories={categories} />
      <SectionHeader>{PRODUCTS.TITLE}</SectionHeader>
      <Products products={products} isLarge />
    </Container>
  </main>
);

export const getStaticProps: GetStaticProps = async () => {
  const categoriesRes = await API.getCategories();
  const categories: CategoryType[] = categoriesRes.errorCode || categoriesRes.apiError ? [] : categoriesRes;
  const productsRes = await API.getProducts('?_limit=12&_page=1');
  const products: ProductListType =
    productsRes.errorCode || productsRes.apiError
      ? initProductList
      : { data: productsRes.data, meta: productsRes.meta };

  if (!validateCategories(categories) || !validateProducts(products.data)) {
    console.log('validateCategories', validateCategories.errors);
    console.log('validateProducts', validateProducts.errors);
    
    return { notFound: true };
  }

  if (categories.length > 0) {
    fs.writeFileSync(categoriesFilePath(), JSON.stringify(categories));
  }

  return {
    props: {
      categories,
      products,
    },
  };
};

export default Home;
