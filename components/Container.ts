import styled from 'styled-components';

interface Props {
  mt?: number;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
}

const Container = styled.div<Props>`
  margin-top: ${(props) => props.mt || 0}px;
  display: ${(props) => props.display || 'block'};
  align-items: ${(props) => props.alignItems || 'unset'};
  justify-content: ${(props) => props.justifyContent || 'unset'};
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export default Container;
