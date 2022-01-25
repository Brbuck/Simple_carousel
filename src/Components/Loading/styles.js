import styled, { keyframes } from 'styled-components';

const load = keyframes`  
  to {
      transform: rotate(360deg);
    }
  
`;

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .loading-page{
      width: 120px;
      height: 120px;
      border: 15px solid;
      border-radius: 50%;
      border-top-color: transparent;
      margin: 0 auto;
      color: red;
      animation: ${load} 0.6s linear infinite;
    }
`;