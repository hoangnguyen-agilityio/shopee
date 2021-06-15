import { FC, useEffect, useContext } from 'react';
import { GetStaticProps } from 'next';

import Header from 'components/Header';
import Container from 'components/Container';
import SectionHeader from 'components/SectionHeader';
import Categories from 'components/Categories';
import Products from 'components/Products';

import { AppContext } from 'store/AppContext';
import { CategoryType, ProductType, ProductListType } from 'interfaces';
import { parseLinkHeader } from 'helper';

interface Props {
  categories: CategoryType[];
  products: ProductListType;
}

const Home: FC<Props> = ({ categories, products }) => {
  const { updateCategories, updateProducts, updateKeyWord, keyWord } = useContext(AppContext);
  
  useEffect(() => {
    updateCategories(categories);
    updateProducts(products);
    updateKeyWord('');
  }, []);
  
  return (
    <main>
      <Header />
      <Container mt={24}>
        <Categories categories={categories} />
        <SectionHeader>Gợi ý hôm nay</SectionHeader>
        <Products isLarge />
      </Container>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const categoriesRes = await fetch('https://shopee-db.herokuapp.com/categories');
  const categories: CategoryType[] = await categoriesRes.json();

  const productsRes = await fetch('https://shopee-db.herokuapp.com/products?_limit=12&_page=1');
  const meta = parseLinkHeader(productsRes.headers.get('Link') || '');
  const products: ProductType[] = await productsRes.json();

  return {
    props: {
      categories,
      products: { data: products, meta: meta },
    },
  };
};

export default Home;
