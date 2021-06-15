import styled from 'styled-components';
import theme from 'theme';

const { loading } = theme;

export const StyledLoading = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${loading.layer_color};
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.div`
  border: 10px solid ${loading.loader_color};
  border-radius: 50%;
  border-top: 10px solid ${loading.loader_progress_color};
  width: 50px;
  height: 50px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
