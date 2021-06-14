import styled from 'styled-components';
import SearchIcon from 'public/images/searchIcon.svg';

export const SearchBarWrap = styled.form`
  width: 840px;
  display: flex;
  padding: 3px;
  background: white;
  border-radius: 2px;
  box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 9%);
`;

export const SearchInput = styled.input`
  margin-left: 10px;
  flex: 1;
  border: none;
  outline: none;
`;

export const SearchButton = styled.button`
  padding: 9px 22px;
  background: #fb5533;
  color: white;
  font-size: 14px;
  line-height: 0;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 9%);
  border-radius: 2px;
  border: none;
  cursor: pointer;
`

export const StyledSearchIcon = styled(SearchIcon)`
  width: 16px;
  height: 16px;
  fill: currentColor;
`;
