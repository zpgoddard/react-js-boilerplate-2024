interface ThemeObject {
  background: string;
  primary: string;
  secondary: string;
  accent: string;
  text: string;
}

export const darkTheme: ThemeObject = {
  background: '#010104',
  primary: '#3A31D8',
  secondary: '#080442',
  accent: '#0600C2',
  text: '#EAE9FC',
};

export const lightTheme: ThemeObject = {
  background: '#010104',
  primary: '#3A31D8',
  secondary: '#080442',
  accent: '#0600C2',
  text: '#EAE9FC',
};

export const getTheme = (themeMode: string) => {
  switch (themeMode) {
  case 'light':
    return lightTheme;
  case 'dark':
    return darkTheme;
  default:
    return darkTheme;
  }
};

export default { getTheme, darkTheme, lightTheme };