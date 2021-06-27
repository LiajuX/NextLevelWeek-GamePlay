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

  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: theme.colors.overlay,
  },

  modalContainer: {
    justifyContent: 'center',
    height: '25%',
    width: '100%',
  },
  
  modalTitle: {
    paddingTop: 24,
    color: theme.colors.heading,
    fontSize: 20,
    fontFamily: theme.fonts.title700,
    lineHeight: 26,
    textAlign: 'center',
  },
  
  redText: {
    paddingTop: 24,
    color: theme.colors.primary,
    fontSize: 20,
    fontFamily: theme.fonts.title700,
    lineHeight: 26,
    textAlign: 'center',
  },

  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },

  outlinedButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    height: 56,
    borderRadius: 8,
    marginRight: 16,
    borderWidth: 1,
    borderColor: theme.colors.secondary40,
  },

  filledButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    height: 56,
    borderRadius: 8,
    backgroundColor: theme.colors.primary,
  },

  buttonText: {
    color: theme.colors.heading,
    fontSize: 15,
    fontFamily: theme.fonts.text500,
    lineHeight: 25,
  },
});  
