import customRender from './render';

// re-export everything
export * from 'react-testing-library';

// override render method
export { customRender as render };
