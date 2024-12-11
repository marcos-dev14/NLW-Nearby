import { StatusBar } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { Stack } from "expo-router"
import {
  useFonts,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik"

import { colors } from "@/styles/theme"

import { Loading } from "@/components/loading"

export default function Layout() {
  const [fontsLoaded] = useFonts([
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
  ])

  if(!fontsLoaded) {
    return <Loading />
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack 
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: colors.gray[100]
          }
        }}
      />
      
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.gray[100]}
        translucent
      />
    </GestureHandlerRootView>
  )
}