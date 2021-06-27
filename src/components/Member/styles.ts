import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 24,
  },
  
  content: {
    flex: 1,
    marginLeft: 20,
  },

  username: {
    color: theme.colors.heading,
    fontSize: 18,
    fontFamily: theme.fonts.title700,
  },

  status: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  statusBullet: {
    width: 8,
    height: 8,
    marginRight: 8,
    borderRadius: 4,
  },

  statusName: {
    color: theme.colors.highlight,
    fontSize: 13,
    fontFamily: theme.fonts.text400,
  },
});
