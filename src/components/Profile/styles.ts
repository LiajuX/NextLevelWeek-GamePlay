import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textContainer: {
    marginLeft: 22,
  },

  user: {
    flexDirection: 'row',
  },

  greeting: {
    marginRight: 6,
    color: theme.colors.heading,
    fontSize: 24,
    fontFamily: theme.fonts.title500,
    lineHeight: 31,
  },

  username: {
    color: theme.colors.heading,
    fontSize: 24,
    fontFamily: theme.fonts.title700,
    lineHeight: 31,
  },

  message: {
    color: theme.colors.highlight,
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    lineHeight: 17,
  },
});  
