import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { View, ImageBackground } from 'react-native'

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter'
import * as SplashScreen from 'expo-splash-screen'

import { theme } from './src/theme'
import Widget from './src/components/Widget'

import backImage from './src/assets/nlw-return.png'

export default function App() {
  SplashScreen.preventAutoHideAsync()
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  })

  if (!fontsLoaded) {
    return null
  }

  SplashScreen.hideAsync()

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background
      }}
    >
      <StatusBar style="light" backgroundColor="transparent" translucent />

      <ImageBackground
        source={backImage}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: 'center' }}
      >
        <Widget />
      </ImageBackground>
    </View>
  )
}
