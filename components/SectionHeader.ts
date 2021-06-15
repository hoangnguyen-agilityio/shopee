import styled from 'styled-components';
import theme from 'theme';

const { sectionHeader } = theme;

const SectionHeader = styled.h2`
  background-color: ${sectionHeader.bg_color};
  padding: 20px;
  text-transform: uppercase;
  font-size: 16px;
  color: ${sectionHeader.color};
  font-weight: 500;
`;

export default SectionHeader;
