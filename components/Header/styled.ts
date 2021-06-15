import styled from 'styled-components';
import Logo from 'public/images/logo.svg';
import theme from 'theme';

const { header } = theme;

export const StyledHeader = styled.header`
  background: ${header.bg_color};
  color: ${header.color};
  padding: 16px 0;
  min-width: 1280px;
`;

export const StyledLogo = styled(Logo)`
  width: 162px;
  height: 50px;
  cursor: pointer;
`;
