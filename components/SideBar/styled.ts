import styled from 'styled-components';
import theme from 'theme';

const { sideBar } = theme;

export const StyledSlideBarWrap = styled.div`
  width: 200px;
`;

export const StyledSlideBarList = styled.ul`
  padding: 10px;
`;

export const StyledSlideBarItem = styled.li`
  padding: 6px 0;
  cursor: pointer;
`;

export const StyledSlideBarItemActive = styled.li`
  padding: 6px 0;
  cursor: pointer;
  color: ${sideBar.active_color};
  font-weight: 700;
`;
