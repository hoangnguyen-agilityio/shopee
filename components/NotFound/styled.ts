import styled from 'styled-components';
import theme from 'theme';

const { notFound } = theme;

export const StyledNotFoundWrap = styled.div`
  background-color: ${notFound.bg_color};
  box-shadow: ${notFound.shadow};
  border: 0;
  margin: 32px 16px 0;
  padding: 48px 24px;
  text-align: center;
`;

export const StyledNotFoundTitle = styled.h2`
  font-size: 40px;
  color: ${notFound.title_color};
`;

export const StyledNotFoundContent = styled.div`
  font-size: 16px;
  color: ${notFound.content_color};
  margin-top: 32px;
`;
