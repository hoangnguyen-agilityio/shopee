import { parseLinkHeader } from 'helper';

const BASE_URL = process.env.API_HOST;

const API = {
  getCategories: async () => {
    try {
      const res = await fetch(`${BASE_URL}/categories`);

      return res.ok ? await res.json() : { errorCode: res.status, message: res.statusText };
    } catch (error) {
      return { apiError: error };
    }
  },
  getProducts: async (queryString: string) => {
    try {
      const res = await fetch(`${BASE_URL}/products${queryString}`);

      return res.ok
        ? {
            meta: parseLinkHeader(res.headers.get('Link') || ''),
            data: await res.json(),
          }
        : { errorCode: res.status, message: res.statusText };
    } catch (error) {
      return { apiError: error };
    }
  },
  getProductsByLink: async (link: string) => {
    try {
      const res = await fetch(process.env.NODE_ENV === 'development' ? link : link.replace('http://', 'https://'));
      return res.ok
        ? {
            meta: parseLinkHeader(res.headers.get('Link') || ''),
            data: await res.json(),
          }
        : { errorCode: res.status, message: res.statusText };
    } catch (error) {
      return { apiError: error };
    }
  },
};

export default API;
