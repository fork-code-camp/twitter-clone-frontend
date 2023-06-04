import palette from './palette';

const typography = {
  fontFamily: 'SF Compact Display, sans-serif',
  h1: {
    fontWeight: 900,
    fontSize: 42,
  },
  h2: {
    fontFamily: 'SF Compact Display',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 21,
    lineHeight: '25px',
  },
  h3: {
    color: palette.primary.dark,
    fontFamily: 'SF Compact Display',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '19px',
    lineHeight: '23px',
  },
  h4: {
    color: palette.primary.dark,
    fontFamily: 'SF Compact Display',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '19px',
  },
  button: {
    color: palette.primary.light,
    fontFamily: 'SF Compact Display',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '15px',
    lineHeight: '19px',
  },
};

export default typography;
