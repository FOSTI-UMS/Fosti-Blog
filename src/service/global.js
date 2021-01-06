import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
 
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  
  }
  body {

    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};

  }
  
  .darkdark{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  a {
    color: ${({ theme }) => theme.text};
  }
`;
