import { FC } from 'react';
import { GetStaticProps } from 'next';

import Header from 'components/Header';
import Container from 'components/Container';
import SectionHeader from 'components/SectionHeader';
import Categories from 'components/Categories';
import Products from 'components/Products';

import { CategoryType, ProductType, ProductListType } from 'interfaces';
import { parseLinkHeader } from 'helper';

interface Props {
  categories: CategoryType[];
  products: ProductListType;
}

const Home: FC<Props> = ({ categories, products }) => (
  <main>
    <Header />
    <Container mt={24}>
      <Categories categories={categories} />
      <SectionHeader>Gợi ý hôm nay</SectionHeader>
      <Products products={products} isLarge />
    </Container>
  </main>
);

export const getStaticProps: GetStaticProps = async () => {
  const categoriesRes = await fetch(`${process.env.API_HOST}categories`);
  const categories: CategoryType[] = await categoriesRes.json();

  const productsRes = await fetch(`${process.env.API_HOST}products?_limit=12&_page=1`);
  const meta: ProductListType['meta'] = parseLinkHeader(productsRes.headers.get('Link') || '');
  const products: ProductType[] = await productsRes.json();

  return {
    props: {
      categories,
      products: { data: products, meta: meta },
    },
  };
};

export default Home;
