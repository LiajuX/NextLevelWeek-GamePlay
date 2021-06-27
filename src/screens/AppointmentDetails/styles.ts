import { Platform, StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 234,
    justifyContent: 'flex-end',
    marginBottom: 24,
  },

  bannerContent: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  
  title:{
    marginBottom: 12,
    color: theme.colors.heading,
    fontSize: 28,
    fontFamily: theme.fonts.title700,
    lineHeight: 36,
  },

  subtitle: {
    width: 340,
    color: theme.colors.heading,
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    lineHeight: 21,
  },

  buttonContainer: {
    marginBottom: getBottomSpace() + Platform.OS === 'ios' ? 0 : 20,
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
});
