import { FC, useContext, useState } from 'react';

import Product from './Product';
import Pagination from './Pagination';
import Loading from 'components/Loading';
import { StyledProductsList } from './styled';
import { AppContext } from 'store/AppContext';
import { ProductType, ProductListType } from 'interfaces';
import { parseLinkHeader } from 'helper';

const ListProducts: FC<{ isLarge: boolean }> = ({ isLarge }) => {
  const { products, isGettingProducts, updateProducts, updateIsGettingProducts } = useContext(AppContext);

  const handleSwitchPage = (link: string) => {
    let meta: ProductListType['meta'] = null;
    let fetchURL = link;

    if (link) {
      fetchURL = link.replace('http://', 'https://');
    }
    updateIsGettingProducts(true);
    fetch(fetchURL)
      .then((response) => {
        meta = parseLinkHeader(response.headers.get('Link') || '');
        return response.json();
      })
      .then((data: ProductType[]) => {
        updateProducts({ data, meta });
        updateIsGettingProducts(false);
      });
  };

  return (
    <StyledProductsList isLarge={isLarge}>
      {isGettingProducts ? (
        <Loading />
      ) : (
        <>
          {products.data.length > 0
            ? products.data.map((product) => <Product key={product.id} product={product} />)
            : 'Hiện không có sản phẩm nào'}
          {products.meta && <Pagination meta={products.meta} handleSwitchPage={handleSwitchPage} />}
        </>
      )}
    </StyledProductsList>
  );
};

export default ListProducts;
