import { StyleSheet } from "react-native"

import { colors, fontFamily } from "@/styles/theme"

export const styles = StyleSheet.create({
  container: {
    height: 36,
    backgroundColor: colors.gray[100],
    borderWidth: 1,
    borderColor: colors.gray[300],
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    gap: 10,
  },
  containerSelected: {
    backgroundColor: colors.green.base,
    borderColor: colors.green.base,
  },

  name: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    color: colors.gray[500],
  },
  nameSelected: {
    color: colors.gray[100]
  }
})