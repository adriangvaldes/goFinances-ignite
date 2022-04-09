import 'styled-components';
import theme from './theme';

declare module 'styled-components' {
  type ThemeType = typeof theme

  export interface DefaultTheme extends ThemeType { }
}

// Code to insert the types of our color Theme in the props of styled components