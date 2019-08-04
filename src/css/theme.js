import colors from './colors';

const buttonSizes = {
  xs: 0,
  default: '8px 20px',
};

export default {
  fontFamily: `'Exo', sans-serif;`,
  fontSize: '1rem',
  colors,
  breakpoints: [
    '36em', // 576px
    '48em', // 768px
    '62em', // 992px
    '75em', // 1200px
  ],
  button: {
    appearance: {
      success: {
        backgroundColor: colors.v7,
        color: colors.v3,
        borderRadius: 4,
        border: 'none',
      },
      ghost: {
        backgroundColor: 'transparent',
        color: colors.v2,
        borderRadius: 4,
        border: 'none',
      },
      none: {
        backgroundColor: 'transparent',
        color: colors.v3,
        borderRadius: 4,
        border: 'none',
      },
    },
    sizes: buttonSizes,
  },
};
