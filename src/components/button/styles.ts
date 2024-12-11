import { StyleSheet } from "react-native"

import { colors, fontFamily } from "@/styles/theme"

export const styles = StyleSheet.create({
  container: {
    maxHeight: 56,
    height: 56,
    backgroundColor: colors.green.base,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
  },

  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    color: colors.gray[100],
  }
})