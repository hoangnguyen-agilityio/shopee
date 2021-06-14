import Container from 'components/Container';
import Link from 'components/Link';

import SearchBar from 'components/SearchBar';
import { StyledHeader, StyledLogo } from './styled';

export default function Header() {
  return (
    <StyledHeader>
      <Container display="flex" alignItems="center" justifyContent="space-between">
        <h1>
          <Link href="/">
            <StyledLogo />
          </Link>
        </h1>
        <SearchBar />
      </Container>
    </StyledHeader>
  );
}
