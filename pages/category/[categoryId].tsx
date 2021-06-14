import { GetStaticProps, GetStaticPaths } from 'next';
import { FC, useContext, useEffect } from 'react';

import Header from 'components/Header';
import Container from 'components/Container';
import Products from 'components/Products';
import SideBar from 'components/SideBar';

import { AppContext } from 'store/AppContext';
import { ProductType, ProductListType, CategoryType } from 'interfaces';
import { parseLinkHeader } from 'helper';
interface Props {
  products: ProductListType;
  categoryId: string;
}

const ListProductsByCategory: FC<Props> = ({ products, categoryId = '' }) => {
  const { updateProducts, keyWord } = useContext(AppContext);

  useEffect(() => {
    let links: ProductListType['links'] = null;
    fetch(`http://localhost:9000/products/?name_like=${keyWord}&category_like=${categoryId}&_page=1`)
      .then((response) => {
        links = parseLinkHeader(response.headers.get('Link') || '');
        return response.json();
      })
      .then((data: ProductType[]) => updateProducts({ data, links }));
  }, [categoryId]);

  return (
    <main>
      <Header />
      <Container mt={24} display="flex">
        <SideBar activeCategory={categoryId} />
        <Products />
      </Container>
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:9000/categories');
  const categories: CategoryType[] = await res.json();

  const paths = categories.map((category) => ({
    params: { categoryId: String(category.id) },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params = { categoryId: '' } }) => {
  return {
    props: {
      categoryId: params.categoryId,
    },
    revalidate: 3,
  };
};

export default ListProductsByCategory;
