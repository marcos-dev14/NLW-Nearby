import { StyleSheet } from "react-native"

import { colors, fontFamily } from "@/styles/theme"

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  
  title: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    color: colors.gray[500],
    marginTop: 12
  },

  content: {
    flexDirection: "row",
    backgroundColor: colors.green.soft,
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    gap: 10,
    marginTop: 16,
  },

  code: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    color: colors.gray[600],
    textTransform: "uppercase",
  }
})