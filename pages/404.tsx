import Header from 'components/Header';
import Container from 'components/Container';
import NotFound from 'components/NotFound';

const NotFoundPage = () => (
  <main>
    <Header />
    <Container mt={24}>
      <NotFound />
    </Container>
  </main>
);

export default NotFoundPage;
