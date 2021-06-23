import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '25%',
  },

  image: {
    width: '100%',
  },
   
  content: {
    flex: 1,
    alignItems: 'center',
    marginTop: -40,
    paddingHorizontal: '12%',
  },

  title: { 
    marginBottom: 16,
    color: theme.colors.heading,
    fontSize: 40,
    fontFamily: theme.fonts.title700,
    lineHeight: 40,
    textAlign: 'center', 
  },

  subtitle: {
    width: 300,
    marginBottom: 48,
    color: theme.colors.heading,
    fontSize: 15,
    fontFamily: theme.fonts.text400,
    lineHeight: 25,
    textAlign: 'center', 
  },
});
