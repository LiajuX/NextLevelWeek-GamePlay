import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  image: {
    width: 64,
    height: 68,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.secondary40,
  },
  
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 64,
    height: 68,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.secondary40,
    backgroundColor: theme.colors.discord,
  },
});
