import React from 'react';
import { render } from 'react-testing-library';

// redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer, rootSaga } from '../redux';
import createSagaMiddleware from 'redux-saga';
// styled-components
import { ThemeProvider } from 'styled-components';
import { theme } from '../css';
// react router
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const customRender = (
  ui,
  {
    initialState,
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
    sagaMiddleware = createSagaMiddleware(),
    store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(sagaMiddleware)
    ),
  } = {}
) => {
  sagaMiddleware.run(rootSaga);

  const rendered = render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={history}>{ui}</Router>
      </ThemeProvider>
    </Provider>,
    history,
    store
  );

  return {
    ...rendered,
  };
};

export default customRender;
