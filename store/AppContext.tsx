import { FC, createContext, useState, useEffect } from 'react';

import { ProductListType, CategoryType, AppState } from 'interfaces';

export const AppContext = createContext<AppState>({
  products: {
    data: [],
    meta: {},
  },
  isGettingProducts: false,
  categories: [],
  keyWord: '',
  updateCategories: () => {},
  updateProducts: () => {},
  updateKeyWord: () => {},
  updateIsGettingProducts: () => {},
});

const AppProvider: FC = ({ children }) => {
  const [products, setProducts] = useState<ProductListType>({ data: [], meta: {} });
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [keyWord, setKeyWord] = useState<string>('');
  const [isGettingProducts, setIsGettingProducts] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem('categories')) {
      const productsData: ProductListType = JSON.parse(localStorage.getItem('products') || '[]') || [];
      const categoriesData: CategoryType[] = JSON.parse(localStorage.getItem('categories') || '[]') || [];
      const keyWordData: string = JSON.parse(localStorage.getItem('keyWord') || '') || '';

      setProducts(productsData);
      setCategories(categoriesData);
      if (keyWordData) setKeyWord(keyWordData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem('keyWord', JSON.stringify(keyWord));
  }, [keyWord]);

  const context = {
    products: products,
    categories: categories,
    keyWord: keyWord,
    isGettingProducts: isGettingProducts,
    updateCategories: (categories: CategoryType[]) => setCategories(categories),
    updateProducts: (products: ProductListType) => setProducts(products),
    updateKeyWord: (keyWord: string) => setKeyWord(keyWord),
    updateIsGettingProducts: (isGetting: boolean) => setIsGettingProducts(isGetting),
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppProvider;
