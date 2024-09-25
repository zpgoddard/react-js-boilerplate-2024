import  { defaultTheme, getTheme, testClientTheme } from './themes';

// if pass in correct client name, we get back that clients theme object
// if we pass back anything else we get the default theme

describe ('themes', () => {

  it ('Returns test clients theme when their name is passed into getTheme function', () => {
    const returnedTheme = getTheme('testClient');
    expect(returnedTheme).toBe(testClientTheme);
  });

  it ('Returns default theme if anything other than a recognised client name is passed', () => {
    const returnedTheme = getTheme('nonsense');
    expect(returnedTheme).toBe(defaultTheme);
  });

});