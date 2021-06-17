import { FC, useState, useEffect } from 'react';

import Loading from 'components/Loading';
import ScrollXWrap from 'components/ScrollXWrap';
import Product from './Product';
import Pagination from './Pagination';
import { StyledProductsList, StyledProductsListWrap } from './styled';

import { ProductListType, initProductList } from 'interfaces';
import API from 'helper/api';
import { PRODUCTS } from 'helper/constTexts';
interface Props {
  products: ProductListType;
  isLarge: boolean;
  width?: string;
}

const ListProducts: FC<Props> = ({ products = initProductList, isLarge = false, width }) => {
  const [currentProducts, setCurrentProducts] = useState<ProductListType>(products);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setCurrentProducts(products);
  }, [products]);

  const handleSwitchPage = async (link: string) => {
    setIsLoading(true);
    const res = await API.getProductsByLink(link);
    setIsLoading(false);
    setCurrentProducts(
      res.apiError || res.errorCode
        ? products
        : {
            data: res.data,
            meta: res.meta,
          },
    );
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
                : PRODUCTS.EMPTY}
            </StyledProductsList>
          </ScrollXWrap>
          {currentProducts.meta && <Pagination meta={currentProducts.meta} handleSwitchPage={handleSwitchPage} />}
        </StyledProductsListWrap>
      )}
    </>
  );
};

export default ListProducts;
