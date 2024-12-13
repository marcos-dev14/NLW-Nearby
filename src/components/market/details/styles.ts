import { StyleSheet } from "react-native"

import { colors, fontFamily } from "@/styles/theme"

export const styles = StyleSheet.create({
  container: {
    padding: 32,
    paddingBottom: 0,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: colors.gray[100]
  },

  name: {
    fontFamily: fontFamily.bold,
    fontSize: 20,
    color: colors.gray[600],
    marginBottom: 12,
  },

  description: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    color: colors.gray[500],
    marginBottom: 12,
  },

  group: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
    paddingVertical: 16,
  },

  title: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    color: colors.gray[500],
    marginBottom: 12,
  },

  rule: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    color: colors.gray[500]
  }
})
