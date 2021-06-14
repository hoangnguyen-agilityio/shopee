export interface CategoryType {
  id: string;
  name: string;
  src: string;
}

export interface ProductType {
  id: string;
  name: string;
  src: string;
  category: string[];
  price: number;
  oldPrice?: number;
}

export interface ProductListType {
  data: ProductType[];
  links?: {
    first?: string;
    last?: string;
    prev?: string;
    next?: string;
  } | null;
}

export interface AppState {
  categories: CategoryType[];
  products: ProductListType;
  keyWord: string;
  updateCategories: (categories: CategoryType[]) => void;
  updateProducts: (products: ProductListType) => void;
  updateKeyWord: (keyWord: string) => void;
}
