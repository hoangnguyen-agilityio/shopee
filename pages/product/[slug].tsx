import { GetStaticProps, GetStaticPaths } from 'next';
import { FC } from 'react';
import fs from 'fs';

import Header from 'components/Header';
import Container from 'components/Container';
import ProductDetail from 'components/ProductDetail';

import { CategoryType, initProduct, ProductType } from 'interfaces';
import { categoriesFilePath } from 'helper';
import API from 'helper/api';
import { validateProducts } from 'helper/validateData';

interface Props {
  product: ProductType;
}

const ProductDetailPage: FC<Props> = ({ product = initProduct }) => {
  return (
    <main>
      <Header />
      <Container>
        <ProductDetail product={product} />
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

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params = { slug: '' } }) => {
  const productsRes = await API.getProducts(`?slug=${params.slug}`);
  const resData: ProductType[] = productsRes.data;
  if (
    productsRes.errorCode ||
    productsRes.apiError ||
    !productsRes.data ||
    productsRes.data.length === 0 ||
    !validateProducts(resData)
  ) {
    console.log('validateProducts', validateProducts.errors);
    return { notFound: true };
  }

  const product: ProductType = resData[0];

  return {
    props: {
      product,
    },
    revalidate: 3,
  };
};

export default ProductDetailPage;
