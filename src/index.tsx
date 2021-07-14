import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes';
import ThemeProvider from './styles/themes/ThemeProvider';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
