import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
		box-sizing: border-box;
	}

  body {
		margin: 0;
		padding: 0;
    font-size: ${p => p.theme.fontSize};
		background-color: ${p => p.theme.colors.v1};
		color: ${p => p.theme.colors.v2}
	}

  *, *:before, *:after {
		box-sizing: inherit;
	}

	body, button, a {
		font-family: ${p => p.theme.fontFamily};
	}

	h1, h2, h3 {
		margin: 0;
	}
`;

export default GlobalStyle;
