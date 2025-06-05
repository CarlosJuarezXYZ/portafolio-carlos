/** @jsxImportSource @emotion/react */
import { Global, css, useTheme } from '@emotion/react';

const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body {
          font-family: 'Segoe UI', sans-serif;
          background-color: ${theme.background};
          color: ${theme.text};
          transition: background 0.3s ease, color 0.3s ease;
        }
        a {
          text-decoration: none;
          color: inherit;
        }
      `}
    />
  );
};

export default GlobalStyles;
