import { FC, useState, useEffect } from 'react';

import Product from './Product';
import Pagination from './Pagination';
import Loading from 'components/Loading';
import ScrollXWrap from 'components/ScrollXWrap';
import { StyledProductsList, StyledProductsListWrap } from './styled';
import { ProductType, ProductListType } from 'interfaces';
import { parseLinkHeader } from 'helper';

interface Props {
  products: ProductListType;
  isLarge: boolean;
  width?: string;
}

const ListProducts: FC<Props> = ({ products = { data: [], meta: null }, isLarge = false, width }) => {
  const [currentProducts, setCurrentProducts] = useState<ProductListType>(products);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setCurrentProducts(products);
  }, [products])
  const handleSwitchPage = (link: string) => {
    let meta: ProductListType['meta'] = null;
    let fetchURL = link;

    // if (link) {
    //   fetchURL = link.replace('http://', 'https://');
    // }
    setIsLoading(true);
    fetch(fetchURL)
      .then((response) => {
        meta = parseLinkHeader(response.headers.get('Link') || '');
        return response.json();
      })
      .then((data: ProductType[]) => {
        setCurrentProducts({ data, meta });
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <StyledProductsListWrap width={width}>
          <ScrollXWrap>
            <StyledProductsList isLarge={isLarge}>
              {currentProducts.data.length > 0
                ? currentProducts.data.map((product) => <Product key={product.id} product={product} />)
                : 'Hiện không có sản phẩm nào'}
            </StyledProductsList>
          </ScrollXWrap>
          {currentProducts.meta && <Pagination meta={currentProducts.meta} handleSwitchPage={handleSwitchPage} />}
        </StyledProductsListWrap>
      )}
    </>
  );
};

export default ListProducts;
