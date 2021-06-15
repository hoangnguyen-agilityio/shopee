import { FC } from 'react';

import { StyledPagination } from './styled';

import { ProductListType } from 'interfaces';

interface Props {
  meta: ProductListType['meta'];
  handleSwitchPage: (link: string) => void;
}

const Pagination: FC<Props> = ({ meta, handleSwitchPage }) => {
  return (
    <StyledPagination>
      <button onClick={() => handleSwitchPage(meta?.first || '')} disabled={!meta?.first || !meta?.prev}>
        First page
      </button>
      <button onClick={() => handleSwitchPage(meta?.prev || '')} disabled={!meta?.prev}>
        Prev page
      </button>
      <button onClick={() => handleSwitchPage(meta?.next || '')} disabled={!meta?.next}>
        Next page
      </button>
      <button onClick={() => handleSwitchPage(meta?.last || '')} disabled={!meta?.last || !meta?.next}>
        Last page
      </button>
    </StyledPagination>
  );
};

export default Pagination;
