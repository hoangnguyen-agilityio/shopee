import styled from 'styled-components';
import Logo from 'public/images/logo.svg';
import MobileLogo from 'public/images/mobile-logo.svg';
import theme from 'theme';

const { header } = theme;

export const StyledHeader = styled.header`
  background: ${header.bg_color};
  color: ${header.color};
  padding: 16px;
`;

export const StyledLogo = styled(Logo)`
  width: 162px;
  height: 50px;
  cursor: pointer;
`;

export const StyledMobileLogo = styled(MobileLogo)`
  width: 36px;
  height: 36px;
  cursor: pointer;
`;
