import Ajv, { JSONSchemaType } from 'ajv';
import { CategoryType, ProductType } from 'interfaces';

const ajv = new Ajv();

const categorySchema: JSONSchemaType<CategoryType> = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    slug: { type: 'string' },
    imageLink: { type: 'string' },
  },
  required: ['id', 'name', 'slug', 'imageLink'],
  additionalProperties: false,
};

const productSchema: JSONSchemaType<ProductType> = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    slug: { type: 'string' },
    imageLink: { type: 'string' },
    categories: { type: 'array', items: { type: 'string' } },
    price: { type: 'number' },
    oldPrice: { type: 'number', nullable: true },
  },
  required: ['id', 'name', 'slug', 'imageLink', 'categories', 'price'],
  additionalProperties: false,
};

const categoriesSchema = {
  type: 'array',
  items: categorySchema,
};

const productsSchema = {
  type: 'array',
  items: productSchema,
};

export const validateCategories = ajv.compile(categoriesSchema);
export const validateProducts = ajv.compile(productsSchema);
