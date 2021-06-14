import styled from 'styled-components';
import Logo from 'public/images/logo.svg';

export const StyledHeader = styled.header`
  background: linear-gradient(-180deg, #f53d2d, #f63);
  color: white;
  padding: 16px 0;
`;

export const StyledLogo = styled(Logo)`
  width: 162px;
  height: 50px;
  cursor: pointer;
`;
