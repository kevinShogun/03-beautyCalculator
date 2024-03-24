import {StyleSheet} from 'react-native';

// const isDarkMode = useColorScheme() === 'dark';

export const colors = {
  main: '#dfd5d9',
  secondary: '#d7cacf',
  dark: '#2e292a',
  white: '#fff',
  darkText: '#8d8588',
  lightText: '#797173',
  subTitleDark: '#4a3d34',
  subTitleLight: '#a2999c',
};

export const style = StyleSheet.create({
  bgDark: {
    backgroundColor: colors.dark,
    flex: 1,
  },
  bgLight: {
    backgroundColor: colors.main,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
  },
  mainResultDark: {
    color: colors.darkText,
    fontSize: 25,
    textAlign: 'right',
    fontWeight: '500',
    marginBottom: 5,
  },
  mainResultLight: {
    color: colors.lightText,
    fontSize: 25,
    textAlign: 'right',
    fontWeight: '500',
    marginBottom: 5,
  },
  subResultDark: {
    color: colors.subTitleDark,
    fontSize: 65,
    textAlign: 'right',
    fontWeight: '600',
  },
  subResultLigth: {
    color: colors.subTitleLight,
    fontSize: 65,
    textAlign: 'right',
    fontWeight: '600',
  },

  buttonLight: {
    height: 75,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  buttonDark: {
    height: 75,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  btnTextDark: {
    textAlign: 'center',
    fontSize: 25,
    color: colors.darkText,
    fontWeight: '400',
  },
  btnTextLight: {
    textAlign: 'center',
    fontSize: 25,
    color: colors.lightText,
    fontWeight: '400',
  },
});
