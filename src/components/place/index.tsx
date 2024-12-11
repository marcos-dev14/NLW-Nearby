import { Image, TouchableOpacity, View, Text, TouchableOpacityProps } from "react-native"
import { IconTicket } from "@tabler/icons-react-native"

import { colors } from "@/styles/theme"

import { styles } from "./styles"

import type { PlacesResponse } from "@/types/Place"

type PlaceProps = TouchableOpacityProps & {
  data: PlacesResponse
}

export function Place({ data, ...rest }: PlaceProps) {
  return (
    <TouchableOpacity
      activeOpacity={.7}
      style={styles.container}
      {...rest}
    >
      <Image source={{ uri: data.cover }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.description}>{data.description}</Text>

        <View style={styles.footer}>
          <IconTicket size={16} color={colors.red.base} />
          <Text style={styles.tickets}>{data.coupons} cupons disponíveis</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}