import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: getStatusBarHeight() + 26,
    marginBottom: 40,
    paddingHorizontal: 24,
  },

  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: theme.colors.primary,
  },

  content: {
    marginTop: 40,
  },

  matches: {    
    paddingLeft: 24
  }
});
