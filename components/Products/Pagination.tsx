import { FC } from 'react';

import { StyledPagination } from './styled';

import { ProductListType } from 'interfaces';

interface Props {
  links: ProductListType['links'];
  handleSwitchPage: (link: string) => void;
}

const Pagination: FC<Props> = ({ links, handleSwitchPage }) => {
  return (
    <StyledPagination>
      <button onClick={() => handleSwitchPage(links?.first || '')} disabled={!links?.first || !links?.prev}>
        First page
      </button>
      <button onClick={() => handleSwitchPage(links?.prev || '')} disabled={!links?.prev}>
        Prev page
      </button>
      <button onClick={() => handleSwitchPage(links?.next || '')} disabled={!links?.next}>
        Next page
      </button>
      <button onClick={() => handleSwitchPage(links?.last || '')} disabled={!links?.last || !links?.next}>
        Last page
      </button>
    </StyledPagination>
  );
};

export default Pagination;
