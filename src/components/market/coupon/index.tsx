import { View, Text } from "react-native"
import { IconTicket } from "@tabler/icons-react-native"

import { colors } from "@/styles/theme"

import { styles } from "./styles"

type Coupon = {
  code: string
}

export function Coupon({ code }: Coupon) {
  return (
    <View style={styles.container}>
      <Text>Utilize esse cupom</Text>

      <View style={styles.content}>
        <IconTicket size={24} color={colors.green.light} />
        <Text style={styles.code}>{code}</Text>
      </View>
    </View>
  )
}