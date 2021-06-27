import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 104,
    height: 120,
    marginRight: 8,
    borderRadius: 8,
  },

  content: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 102,
    height: 118,
    paddingTop: 8,
    borderRadius: 7,
  },

  selected: {
    position: 'absolute',
    top: 7,
    right: 7,
    width: 10,
    height: 10,
    borderWidth: 1,
    borderColor: theme.colors.secondary50, 
    borderRadius: 2,
    backgroundColor: theme.colors.primary,
  },

  select: {
    position: 'absolute',
    top: 7,
    right: 7,
    width: 10,
    height: 10,
    borderWidth: 1,
    borderColor: theme.colors.secondary50, 
    borderRadius: 2,
    backgroundColor: theme.colors.secondary100,
  },

  title: {
    color: theme.colors.heading,
    fontSize: 15,
    fontFamily: theme.fonts.title700,
  },
});
