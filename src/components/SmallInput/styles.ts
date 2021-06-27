import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
    color: theme.colors.heading,
    backgroundColor: theme.colors.secondary40,
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    textAlign: 'center',
  }
});
