import styled from 'styled-components';
import SearchIcon from 'public/images/searchIcon.svg';
import theme from 'theme';

const { searchBar } = theme;

export const SearchBarWrap = styled.form`
  max-width: 840px;
  width: calc(100% - 50px);
  margin-left: 20px;
  padding: 3px;
  display: flex;
  background: ${searchBar.bg_color};
  border-radius: 2px;
  box-shadow: ${searchBar.shadow};
`;

export const SearchInput = styled.input`
  margin-left: 10px;
  flex: 1;
  border: none;
  outline: none;
`;

export const SearchButton = styled.button`
  padding: 9px 22px;
  background: ${searchBar.btn_bg_color};
  color: ${searchBar.btn_color};
  font-size: 14px;
  line-height: 0;
  box-shadow: ${searchBar.btn_shadow};
  border-radius: 2px;
  border: none;
  cursor: pointer;
`;

export const StyledSearchIcon = styled(SearchIcon)`
  width: 16px;
  height: 16px;
  fill: currentColor;
`;
