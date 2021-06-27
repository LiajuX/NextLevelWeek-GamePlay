import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 8,
    paddingLeft: 24,
  },
  
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 22,
    paddingRight: 24,
  },

  textContainer: {
    flex: 1,
  },

  name: {
    marginBottom: 8,
    color: theme.colors.heading,
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    lineHeight: 23,
  },

  playerType: {
    color: theme.colors.highlight,
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    lineHeight: 17,
  },
});
