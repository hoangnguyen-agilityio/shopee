import MediaQuery from 'react-responsive';
import Container from 'components/Container';
import Link from 'next/link';

import SearchBar from 'components/SearchBar';
import { StyledHeader, StyledLogo, StyledMobileLogo } from './styled';

export default function Header() {
  return (
    <StyledHeader>
      <Container display="flex" alignItems="center" justifyContent="space-between">
        <Link href="/">
          <h1>
            <MediaQuery minWidth={768}>
              <StyledLogo />
            </MediaQuery>
            <MediaQuery maxWidth={767}>
              <StyledMobileLogo />
            </MediaQuery>
          </h1>
        </Link>
        <SearchBar />
      </Container>
    </StyledHeader>
  );
}
