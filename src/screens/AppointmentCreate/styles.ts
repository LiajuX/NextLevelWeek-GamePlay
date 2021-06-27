import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  label: {
    marginTop: 32, 
    marginBottom: 12,
    color: theme.colors.heading,
    fontSize: 18,
    fontFamily: theme.fonts.title700,
  },

  form: {
    paddingHorizontal: 24,
  },

  serverSelector: {
    flex: 1,
    marginTop: 32,
  },
  
  selectorContent: {
    height: 68,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
    overflow: 'hidden',
  },

  selectorimage: {
    width: 64,
    height: 68,
    marginLeft: -1,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
    backgroundColor: theme.colors.secondary40,
  },

  selectorBody: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 35,
  },

  selectorTitle: {
    color: theme.colors.heading,
    fontSize: 18,
    fontFamily: theme.fonts.title700,
  },

  selectorSubtitle: {
    marginLeft: 35,
    color: theme.colors.highlight,
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    lineHeight: 17,
  },

  dateField: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  column: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  divider: {
    marginHorizontal: 4,
    color: theme.colors.highlight,
    fontSize: 15,
  },

  labelSubtitle: {
    marginTop: 32, 
    marginBottom: 12,
    color: theme.colors.highlight,
    fontSize: 13,
    fontFamily: theme.fonts.text400,
  },

  textarea: {
    height: 95,
    paddingTop: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
    color: theme.colors.heading,
    backgroundColor: theme.colors.secondary40,
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    textAlignVertical: 'top',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 56,
    marginTop: 52,
    marginBottom: 32,
    borderRadius: 8,
    backgroundColor: theme.colors.primary,
  },

  buttonText: {
    color: theme.colors.heading,
    fontSize: 15,
    fontFamily: theme.fonts.text500,
    textAlign: 'center',
  },

  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,
  },

  modalContainer: {
    flex: 1,
    marginTop: 100,
  },

  bar: {
    alignSelf: 'center',
    width: 39,
    height: 2,
    marginTop: 14,
    borderRadius: 2,
    backgroundColor: theme.colors.secondary40,
  },
});
