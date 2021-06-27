import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  
  content: {
    flex: 1,
    marginLeft: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  
  title: {
    color: theme.colors.heading,
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    lineHeight: 23,
  },
  
  category: {
    color: theme.colors.highlight,
    marginRight: 24,
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    lineHeight: 17,
  },
  
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    marginRight: 24,
    paddingBottom: 12,
  },

  dateInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  date: {
    marginLeft: 6,
    color: theme.colors.heading,
    fontSize: 13,
    fontFamily: theme.fonts.text500,
  },

  playerInfos: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  player: {
    marginLeft: 6,
  },
});
