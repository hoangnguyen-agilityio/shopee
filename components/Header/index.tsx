import MediaQuery from 'react-responsive';
import Container from 'components/Container';
import Link from 'components/Link';

import SearchBar from 'components/SearchBar';
import { StyledHeader, StyledLogo, StyledMobileLogo } from './styled';

export default function Header() {
  return (
    <StyledHeader>
      <Container display="flex" alignItems="center" justifyContent="space-between">
        <h1>
          <Link href="/">
            <MediaQuery minWidth={768}>
              <StyledLogo />
            </MediaQuery>
            <MediaQuery maxWidth={767}>
              <StyledMobileLogo />
            </MediaQuery>
          </Link>
        </h1>
        <SearchBar />
      </Container>
    </StyledHeader>
  );
}
