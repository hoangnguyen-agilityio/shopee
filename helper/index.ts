import path from 'path';

export const parseLinkHeader = (linkHeader: string) => {
  if (linkHeader) {
    return Object.fromEntries(
      linkHeader
        .split(', ')
        .map((header) => header.split('; '))
        .map((header) => [header[1].replace(/"/g, '').replace('rel=', ''), header[0].slice(1, -1)]),
    );
  }

  return null;
};

export const getCategoryFromLink = () => {
  const category = window.location.href.match(/category\/[0-9]+/);

  if (category && category.length > 0) {
    const string = category[0];
    return string.slice(9, string.length);
  }

  return null;
};

export const categoriesFilePath = () => {
  return path.join(process.cwd(), 'store', 'catergories.json');
};

export const priceFormat = (price: string | number) => `đ${String(price).replace(/\d(?=(\d{3})+$)/g, '$&,')}`;
