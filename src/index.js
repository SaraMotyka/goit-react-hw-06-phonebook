import { createRoot } from 'react-dom/client';
import { StrictMode } from "react";
import { Provider } from 'react-redux';
import App from './components/App';
import { store } from './Redux/store';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </StrictMode>
);
