import { View, Text } from "react-native"
import { IconProps } from "@tabler/icons-react-native"

import { colors } from "@/styles/theme"
import { styles } from "./style"

type InfoProps = {
  description: string
  icon: React.ComponentType<IconProps>
}

export function Info({ icon: Icon, description }: InfoProps) {
  return (
    <View style={styles.container}>
      <Icon size={16} color={colors.gray[400]} />
      <Text style={styles.text}>{description}</Text>
    </View>
  )
}