import { useEffect, useState } from "react"
import { View, Alert } from "react-native"

import { api } from "@/services/api"

import { Categories } from "@/components/categories"
import { Places } from "@/components/places"

import type { CategoriesResponse } from "@/types/categories"
import type { PlacesResponse } from "@/types/Place"

type MarketsProps = PlacesResponse

export default function Home() {
  const [categories, setCategories] = useState<CategoriesResponse>([])
  const [category, setCategory] = useState("")
  const [markets, setMarkets] = useState<MarketsProps[]>([])

  async function fetchCategories() {
    try {
      const { data } = await api.get('/categories')
      setCategories(data)
      setCategory(data[0].id)
    } catch (error) {
      console.log(error)
      Alert.alert("Categorias", "Não foi possível carregar as categorias.")
    }
  }

  async function fetchMarkets() {
    if(!category) {
      return
    }

    try {
      const { data } = await api.get("/markets/category/" + category)
      setMarkets(data)
    } catch (error) {
      console.log(error)
      Alert.alert("Locais", "Não foi possível carregar os locais.")
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  useEffect(() => {
    fetchMarkets()
  }, [category])

  return (
    <View style={{ flex: 1 }}>
      <Categories 
        data={categories} 
        onSelect={setCategory}
        selected={category}
      />

      <Places data={markets} />
    </View>
  )
}