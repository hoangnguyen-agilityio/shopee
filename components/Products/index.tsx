import { FC, useContext } from 'react';

import Product from './Product';
import Pagination from './Pagination';
import { StyledProductsList } from './styled';
import { AppContext } from 'store/AppContext';
import { ProductType, ProductListType } from 'interfaces';
import { parseLinkHeader } from 'helper';

const ListProducts: FC<{ isLarge?: boolean }> = (isLarge) => {
  const { products, updateProducts } = useContext(AppContext);

  const handleSwitchPage = (link: string) => {
    let links: ProductListType['links'] = null;
    let fetchURL = link;

    if (link) {
      fetchURL = link.replace('http://', 'https://');
    }
    fetch(fetchURL)
      .then((response) => {
        links = parseLinkHeader(response.headers.get('Link') || '');
        return response.json();
      })
      .then((data: ProductType[]) => updateProducts({ data, links }));
  };

  return (
    <StyledProductsList isLarge={isLarge ? true : false}>
      {products.data.length > 0
        ? products.data.map((product) => <Product key={product.id} product={product} />)
        : 'Hiện không có sản phẩm nào'}
      {products.links && <Pagination links={products.links} handleSwitchPage={handleSwitchPage} />}
    </StyledProductsList>
  );
};

export default ListProducts;
