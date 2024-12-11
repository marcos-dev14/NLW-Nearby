import { FlatList } from "react-native"

import { Category } from "../category"

import { styles } from "./styles"

import type { CategoriesResponse } from "@/types/categories"

type CategoriesProps = {
  data: CategoriesResponse
  selected: string
  onSelect: (id: string) => void
}

export function Categories({ data, selected, onSelect }: CategoriesProps) {
  console.log(data);

  return (
    <FlatList 
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category 
          name={item.name} 
          iconId={item.id} 
          isSelected={item.id === selected}
          onPress={() => onSelect(item.id)}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
      style={styles.container}
    />
  )
}