import { StyleSheet } from "react-native"

import { colors, fontFamily } from "@/styles/theme"

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 120,
    padding: 8,
    borderWidth: 1,
    borderColor: colors.gray[200],
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  
  image: {
    width: 116,
    height: 104,
    backgroundColor: colors.gray[200],
    borderRadius: 8,
  },

  content: {
    flex: 1,
    gap: 4
  },

  name: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    color: colors.gray[600],
  },

  description: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    color: colors.gray[500],
  },
  
  footer: {
    flexDirection: "row",
    gap: 7,
    marginTop: 10,
  },

  tickets: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    color: colors.gray[400],
  },
})