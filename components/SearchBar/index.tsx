import { SyntheticEvent, useContext, useState, useEffect } from 'react';

import { SearchBarWrap, SearchInput, SearchButton, StyledSearchIcon } from './styled';
import { ProductType, ProductListType } from 'interfaces';
import { AppContext } from 'store/AppContext';
import { parseLinkHeader, getCategoryFromLink } from 'helper';

const SearchBar = () => {
  const { updateProducts, updateKeyWord, keyWord } = useContext(AppContext);
  const [searchKey, setSearchKey] = useState<string>('');

  useEffect(() => {
    setSearchKey(keyWord);
  }, [keyWord]);

  const handleSubmitSearch = (event: SyntheticEvent) => {
    event.preventDefault();
    const currentCategory = getCategoryFromLink();
    const fetchURL = currentCategory
      ? `http://localhost:9000/products/?name_like=${searchKey}&category_like=${currentCategory}&_page=1`
      : `http://localhost:9000/products/?name_like=${searchKey}&_limit=12&_page=1`;

    let links: ProductListType['links'] = null;

    updateKeyWord(searchKey);
    fetch(fetchURL)
      .then((response) => {
        links = parseLinkHeader(response.headers.get('Link') || '');
        return response.json();
      })
      .then((data: ProductType[]) => updateProducts({ data, links }));
  };

  return (
    <SearchBarWrap onSubmit={handleSubmitSearch}>
      <SearchInput value={searchKey} onChange={(event) => setSearchKey(event.target.value)} />
      <SearchButton>
        <StyledSearchIcon />
      </SearchButton>
    </SearchBarWrap>
  );
};

export default SearchBar;
