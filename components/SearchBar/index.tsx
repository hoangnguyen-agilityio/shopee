import { useState, SyntheticEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/router';

import { SearchBarWrap, SearchInput, SearchButton, StyledSearchIcon } from './styled';

const SearchBar = () => {
  const router = useRouter();
  const keyWord: string = String(router.query?.keyWord || '');
  const [searchKey, setSearchKey] = useState<string>(keyWord);

  const handleSubmitSearch = (event: SyntheticEvent) => {
    event.preventDefault();
    router.push(`/search?keyWord=${searchKey}`);
  };

  return (
    <SearchBarWrap onSubmit={handleSubmitSearch}>
      <SearchInput
        value={searchKey}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchKey(event.target.value)}
      />
      <SearchButton>
        <StyledSearchIcon />
      </SearchButton>
    </SearchBarWrap>
  );
};

export default SearchBar;
