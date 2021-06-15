import { FC, useContext } from 'react';

import Product from './Product';
import Pagination from './Pagination';
import Loading from 'components/Loading';
import ScrollXWrap from 'components/ScrollXWrap';
import { StyledProductsList, StyledProductsListWrap } from './styled';
import { AppContext } from 'store/AppContext';
import { ProductType, ProductListType } from 'interfaces';
import { parseLinkHeader } from 'helper';

const ListProducts: FC<{ isLarge: boolean, width?: string }> = ({ isLarge, width }) => {
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
    <>
      {isGettingProducts ? (
        <Loading />
      ) : (
        <StyledProductsListWrap width={width}>
          <ScrollXWrap>
            <StyledProductsList isLarge={isLarge}>
              {products.data.length > 0
                ? products.data.map((product) => <Product key={product.id} product={product} />)
                : 'Hiện không có sản phẩm nào'}
            </StyledProductsList>
          </ScrollXWrap>
          {products.meta && <Pagination meta={products.meta} handleSwitchPage={handleSwitchPage} />}
        </StyledProductsListWrap >
      )}
    </>
  );
};

export default ListProducts;
