import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
    paddingHorizontal: 24,
  },
  
  title: {
    color: theme.colors.heading,
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    lineHeight: 23,
  },

  subtitle: {
    color: theme.colors.highlight,
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    lineHeight: 17,
  }
});
