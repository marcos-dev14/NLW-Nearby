import { View, Text } from "react-native"
import { IconProps } from "@tabler/icons-react-native"

import { colors } from "@/styles/theme"

import { styles } from "./styles"

interface StepProps {
  icon: React.ComponentType<IconProps>
  title: string
  description: string
}

export function Step({ icon: Icon, title, description }: StepProps) {
  return (
    <View style={styles.container}>
      {Icon && (
        <Icon size={32} color={colors.red.base} />
      )}

      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.description}>
          {description}
        </Text>
      </View>
    </View>
  )
}