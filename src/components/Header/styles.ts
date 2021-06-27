import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 108,
    paddingTop: getStatusBarHeight(),
    paddingHorizontal: 24,
  },

  title: {
    flex: 1,
    color: theme.colors.heading,
    fontSize: 20,
    fontFamily: theme.fonts.title700,
    textAlign: 'center',
  },
});


