export interface CategoryType {
  id: string;
  name: string;
  imageLink: string;
  slug: string;
}

export interface ProductType {
  id: string;
  name: string;
  imageLink: string;
  categories: string[];
  price: number;
  oldPrice?: number;
  slug: string;
}

export interface ProductListType {
  data: ProductType[];
  meta?: {
    first?: string;
    last?: string;
    prev?: string;
    next?: string;
  } | null;
}
