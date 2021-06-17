export interface CategoryType {
  id: string;
  name: string;
  imageLink: string;
  slug: string;
}

export const initCategory = {
  id: '',
  name: '',
  imageLink: '/images/shopee.svg',
  slug: '',
};

export interface ProductType {
  id: string;
  name: string;
  imageLink: string;
  categories: string[];
  price: string;
  oldPrice?: string;
  slug: string;
}

export const initProduct = {
  id: '',
  name: '',
  imageLink: '/images/shopee.svg',
  categories: [],
  price: '',
  oldPrice: '',
  slug: '',
};

export interface ProductListType {
  data: ProductType[];
  meta?: {
    first?: string;
    last?: string;
    prev?: string;
    next?: string;
  } | null;
}

export const initProductList = {
  data: [],
  meta: null,
};
