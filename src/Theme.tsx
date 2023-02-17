import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#02afc6',
    secondary: '#abdc6a',
  },
  fonts: ['Urbanist', 'sans-serif'],
  fontSizes: {
    sm: '1em',
    md: '2em',
    lg: '3em',
  },
} as const;

export const Theme = ({ children }: React.PropsWithChildren) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
