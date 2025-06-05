import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider } from '@emotion/react';
import { useAppSelector } from './hooks/useAppSelector';

const Root = () => {
  const theme = useAppSelector((state) => state.theme.current);
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Root />
  </Provider>
);
