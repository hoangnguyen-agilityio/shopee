import { StyledNotFoundWrap, StyledNotFoundTitle, StyledNotFoundContent } from './styled';

import { NOTFOUND } from 'helper/constTexts';

const NotFound = () => (
  <StyledNotFoundWrap>
    <StyledNotFoundTitle>{NOTFOUND.TITLE}</StyledNotFoundTitle>
    <StyledNotFoundContent>{NOTFOUND.CONTENT}</StyledNotFoundContent>
  </StyledNotFoundWrap>
);

export default NotFound;
