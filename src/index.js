import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootReducer, rootSaga } from './redux';
// styled-components
import { ThemeProvider } from 'styled-components';
import { theme } from './css';
//components
import { GlobalStyle } from './components';
// screens
import App from './pages/App';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <Router>
          <App />
        </Router>
      </React.Fragment>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
